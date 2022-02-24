import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import '../Home/home.css';
import { NavProps } from 'reactstrap';


function HomeCard(props) {
  return(
      <div >   
          <Card  className='card'>
          <Card.Img variant="top" src={props.img} className="class-img" />  
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
}

function Jumbotron(){
  return( 
    <>
      <div class="jumbotron">
        <div class="container">
          <br></br><h1 class="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p><br></br>
        </div>
      </div> 
    <br/>
    </> 
    );
  }

  

const Home = () => {
  return (
    <>  
    <Jumbotron/>
    <div className="wrapper">
      <HomeCard img={require('../../Images/food.jpg')}/>
      <HomeCard img={require('../../Images/food1.jpg')}/>
      <HomeCard img={require('../../Images/food3.jpg')}/>
    </div>
    </>
  );
};

export default Home;