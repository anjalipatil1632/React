import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem , Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';


class CommentForm extends Component {
    constructor(props) {
        super(props);       
        this.state = {
          name: '',
          isModalOpen: false,
          touched: {
            name: false,
           }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

      handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name) {
        const errors = {
            name: ''
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be >= 3 characters';
        else if (this.state.touched.name && name.length > 10)
            errors.name = ' Name should be <= 10 characters';

            return errors;
    }

      render() {
        const errors = this.validate(this.state.name);
        const options = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' }
          ]
        return(
            <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Select options={options} id="rating" name="rating" required defaultValue={{ label: "1", value: 0 }}/>
                                        
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input type="text" id="name" name="name" required
                                      value={this.state.name}
                                      valid={errors.name === ''}
                                      invalid={errors.name !== ''}
                                      onBlur={this.handleBlur('name')}
                                      onChange={this.handleInputChange} />
                                  <FormFeedback>{errors.name}</FormFeedback>
                         
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Input type="textarea" id="comment" name="comment"
                                        rows="7" required/>
                                   
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </Form>
                            
                        </ModalBody>
            </Modal>
        </div>
        );
    }
}
function RenderDish({dish}) {
    
    if(dish != null) {
        return (
            
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
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

  

  function RenderComments({comments}) {
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
              </div>
          )
      }
      else{
        return(
            <div></div>
           );
      }
    
  }

  const  DishDetail = (props) => {
      if(props.dish!=null){
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
                        <RenderComments comments={props.comments} />
                        <CommentForm/>
                    </div>
                </div>
                </div>
        );
      }
      else{
        return(
            <div></div>
           );
      }

}


export default DishDetail;