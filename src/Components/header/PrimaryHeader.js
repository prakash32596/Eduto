import React from 'react';
import './PrimaryHeader.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, NavDropdown, Container, Navbar, Nav } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';

const PrimaryHeader = () => {
  // console.log(props.marque);
  // if (props.marque == true) {
  //   document.getElementById('marque').style.display = "none";
  // }

  return (
    <div className="primaryHeader m-display">

      <Navbar className="primaryNav " expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="m-auto navBar">
              <Navbar.Brand className="primaryBrandLogo" href="#home">Eduto .</Navbar.Brand>
              <Nav.Link as={Link} className="primaryNavItem" to="/">Home</Nav.Link>
              <Nav.Link as={Link} className="primaryNavItem" to="/Courses">Courses</Nav.Link>
              <Nav.Link as={Link} className="primaryNavItem" to="#College/Universities">College/Universities</Nav.Link>
              <Nav.Link as={Link} className="primaryNavItem" to="#Get Involved">Get Involved</Nav.Link>
            </Nav>
             {/* <div   style={{color:'white'}} ><span style={{backgroundColor:'blue'}} >New</span>New Introducing lorem ipsum dolor sit amet, consectetur adipiscing</div> */}
            <Nav className="m-auto navBar">
              <Nav.Link as={Link} className="primaryNavItem" to="/Products">Products</Nav.Link>
              <Nav.Link as={Link} className="primaryNavItem" to="/Pricing">Pricing</Nav.Link>
              <NavDropdown bsPrefix="dropdown" title="Docs" className="primaryDropdownNavItem" id="nav-dropdown">
                <Nav.Link as={Link} className="navItem" to="/">Products</Nav.Link>
                <Nav.Link as={Link} className="navItem" to="#Courses">Pricing</Nav.Link>
              </NavDropdown>
              <NavDropdown title="Login" bsPrefix="dropdown" className="primaryDropdownNavItem" id="nav-dropdown">
                <Nav.Link as={Link} className="navItem" to="/">item</Nav.Link>
                <Nav.Link as={Link} className="navItem" to="#Courses">item</Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );

}

export default PrimaryHeader;
