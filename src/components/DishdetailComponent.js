import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    renderDish(dish) {
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

    renderComments(dish) {
        const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' };
        if(dish != null && dish.comments && dish.comments.length>0) {
            const comments = dish.comments.map((comment) => {
                return (
                    
                        <ul key={comment.id}>
                            <li className="mb-3">{comment.comment}</li>
                            <li className="mb-3">-- {comment.author}, { (new Date(comment.date).toLocaleDateString('en-US', dateOptions))}</li>
                        </ul>
                   
                )
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments:</h4>
                    <ul >
                        { comments }
                    </ul>
                </div>
            );
        }
        else {
           return(
            <div></div>
           );
        } 
    }

    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}
            </div>
        );
    }       
}
export default DishDetail;