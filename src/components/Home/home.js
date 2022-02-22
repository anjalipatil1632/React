import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../Home/home.css';

const Home = () => {
  return (
    <div className="wrapper">   
          <Card  className='Card'>
          <Card.Img variant="top" src={require('../../Images/food.jpg')} className="class-img" />  
          <Card.Body> 
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" className="card-btn">Go somewhere </Button>
          </Card.Body>
          </Card>
          
          <Card  className='Card'>
            <Card.Img variant="top" src={require('../../Images/food.jpg')} className="class-img" />  
            <Card.Body> 
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" className="card-btn">Go somewhere </Button>
            </Card.Body>
          </Card>

          <Card className='Card'>
            <Card.Img variant="top" src={require('../../Images/food.jpg')} className="class-img" />  
            <Card.Body> 
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" className="card-btn">Go somewhere </Button>
            </Card.Body>
          </Card>
          
         
       </div>

    
  );
};

export default Home;