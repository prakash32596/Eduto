import React from 'react';
import './SecondaryHeader.css';
import { Container, Navbar, Nav,NavDropdown} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";


const SecondaryHeader = () => {
  return (
    <div className="secondaryHeader">
      <Navbar className="navSectioin" bg="" expand="lg">
        <Container>
          <Navbar.Brand className="brandLogo" href="#home"> <img src={require('../../assets/images/Rectangle 3.png').default} width="80" height="80" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navBar">
              <Nav.Link as={Link} className="navItem" to="/">About</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/Courses">Admission</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#College/Universities">Academics</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#Get Involved">Costs</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#Get Involved">Campus Life</Nav.Link>
              <NavDropdown title="Others" id="nav-dropdown">
                <Nav.Link as={Link} className="navItem" to="/">item</Nav.Link>
                <Nav.Link as={Link} className="navItem" to="#Courses">item</Nav.Link>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end navBar">
              <Nav.Link as={Link} className="navItem" to="/Products">
                <img  src={require('../../assets/images/noun_Share_896160.svg').default} width="25" height="18" /> <span className="px-2">Share </span> | </Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/Pricing">
              <img src={require('../../assets/images/noun_Download_1560897.svg').default} width="25" height="18" /><span className="px-2">Brochure </span>| </Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/Pricing">
              <img src={require('../../assets/images/noun_Compare_3133212.svg').default} width="25" height="18" /><span className="px-2">Compare </span> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default SecondaryHeader