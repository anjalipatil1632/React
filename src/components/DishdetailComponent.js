
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem , Button, Modal, ModalHeader, ModalBody,
    Row,Col,Form, FormGroup, Input, Label,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control,LocalForm,Errors } from 'react-redux-form';
import Select from 'react-select';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({dish}) {
    
    if(dish != null) {
        return (
            
                <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{ dish.name }</CardTitle>
                        <CardText>{ dish.description }</CardText>
                    </CardBody>
                </Card>
            
        );
    }
    else {
       return(
        <div></div>
       );
    } 

  }

  

  function RenderComments({comments, postComment, dishId}) {
      if (comments != null){
          return(
              <div >
                  <h4>Comments:</h4>
                  <ul className="list-unstyled">
                      {comments.map((comment) => {
                          return(
                              <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                          )
                      })}

                  </ul>
                  <CommentForm dishId={dishId} postComment={postComment} />
              </div>
          )
      }
      else{
        return(
            <div></div>
           );
      }
    
  }

  class CommentForm extends Component {
    constructor(props) {
        super(props);  
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);     
        this.state = {
          isNavOpen:false,
          isModelOpen:false           
        };
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }


    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        alert('Current State is: ' + JSON.stringify(values));
    }

    
      render() {
    
        return(
            <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className='form-group' md={2}yyy>
                                <Col md={11}>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select className="form-control" model=".rating" id="rating" name="rating" defaultValue="1" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    </Col>                                           
                                </Row>
                                <Row className="form-group" md={2}>
                                <Col md={11}>
                                <Label htmlFor="name" > Name</Label>
                            
                                    <Control.text model=".author" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required/',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Col md={11}>
                                <Label htmlFor="comment" md={2}>Comment</Label>
                               
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(2)
                                        }} />
                                        <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required/',
                                            minLength: 'Must be greater than 1 characters',
                                           
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Col md={11}>
                                    <Button type="submit" color="primary">
                                    Comment
                                    </Button>
                              </Col>
                            </Row>
                        </LocalForm>
                        </ModalBody>
            </Modal>
        </div>
        );
    }
}

  const  DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}
                                         postComment={props.postComment}
                                        dishId={props.dish.id}/>
                        

                    </div>
                </div>
                </div>
        );
      }
      

export default DishDetail;   