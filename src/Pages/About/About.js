import React from 'react'
import {Carousel} from 'react-bootstrap'
// import {Row,Col, Container, Navbar, Nav, Button } from 'react-bootstrap';


const  About = () =>{
  return (
    <div className="About">
     <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className=" w-100"
      src={require('../../assets/images/mikael-kristenson-3aVlWP-7bg8-unsplash.png').default}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={require('../../assets/images/michael-marsh-U0dBV_QeiYk-unsplash@2x.png').default}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100"
      src={require('../../assets/images/michael-marsh-U0dBV_QeiYk-unsplash@2x.png').default}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>

  );
}

export default About;