import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    
    if(dish != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{ dish.name }</CardTitle>
                        <CardText>{ dish.description }</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else {
       return(
        <div></div>
       );
    } 

  }

  function RenderComments({dish}) {
      
    const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' };
        if(dish != null && dish.comments && dish.comments.length>0) {
            const comments = dish.comments.map((comment) => {
                return (
                    
                        <ul key={comment.id}>
                        <li className="mb-3">{comment.comment}</li>
                        <li className="mb-3">--{comment.author}, { (new Date(comment.date).toLocaleDateString('en-US', dateOptions))}</li>
                        </ul>
                    
                   )
            });
            return (
                
                <div className="col-12 col-md-5 m-1">
                     <h4>Comments:</h4>
                         {comments}
                 </div>
            );
        }
        else {
           return(
            <div></div>
           );
        }
  }

  const  DishDetail = (props) => {
        return (
            <div className="container">
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments dish={props.dish}/>
            </div>
            </div>
        );
}


export default DishDetail;