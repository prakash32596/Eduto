import React,{useState} from 'react';
import './Header.css';
// import 'bootstrap/dist/css/bootstrap.min.css
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Row,Col, Container, Navbar, Nav, Button,Offcanvas, OffcanvasHeader,OffcanvasBody    } from 'react-bootstrap';


function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Header">
      <Container>
      <Navbar className="navSection" bg="" expand="lg">
    <Container>
    <Navbar.Brand className="brandLogo" href="#home">Eduto .</Navbar.Brand>
    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto navBar mobile-menu-display">
            <Nav.Link as={Link}  className="navItem active" to="/">Home</Nav.Link>
            <Nav.Link as={Link}  className="navItem" to="/About" >Courses</Nav.Link>
            <Nav.Link as={Link}  className="navItem" to="/College/Universities">College/Universities</Nav.Link>
            <Nav.Link as={Link}  className="navItem" to="/Get Involved">Get Involved</Nav.Link>
          </Nav>
          <Nav className="ms-auto navBar mobile-menu-display">
            <Button  className="ms-auto" id="navSignupButton" href="#"> Signup</Button> 
            </Nav>
          {/* <div></div> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav " onClick={handleShow} />
    {/* </Navbar.Collapse> */}
    <Offcanvas className="mobileMenu" show={show} onHide={handleClose} placement="bottom">
        {/* <Offcanvas.Header closeButton>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
        <Nav className="me-auto navBar">
            <Nav.Link as={Link}  className="navItem active" to="/">Home</Nav.Link>
            <Nav.Link as={Link}  className="navItem" to="/About" >Courses</Nav.Link>
            <Nav.Link as={Link}  className="navItem" to="/College/Universities">College/Universities</Nav.Link>
            <Nav.Link as={Link}  className="navItem" to="/Get Involved">Get Involved</Nav.Link>
          </Nav>
          {/* <div></div> */}
            <Button id="navSignupButton" href="#"> Signup</Button> 
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
    </Navbar>
    </Container>
    </div>

  );
}

export default Header;
