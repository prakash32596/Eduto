import React,{useState} from 'react';
import './SecondaryHeader.css';
import { Container, Navbar, Nav, NavDropdown,Offcanvas } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";


const SecondaryHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="secondaryHeader">
      <Navbar className="navSectioin" bg="" expand="lg">
        <Container>
          <Navbar.Brand className="brandLogo m-0 p-2" href="#home"> <img src={require('../../assets/images/Rectangle 3.png').default} width="80" height="80" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow}/>
            <Nav className="m-auto navBar m-display">
              <Nav.Link as={Link} className="navItem" to="/">About</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/admission">Admission</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#College/Universities">Academics</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#Get Involved">Costs</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#Get Involved">Campus Life</Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Others"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end m-auto navBar m-display">
              <Nav.Link as={Link} className="navItem" to="/Products">
                <img src={require('../../assets/images/noun_Share_896160.svg').default} width="25" height="18" /> <span className="px-2">Share </span> | </Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/Pricing">
                <img src={require('../../assets/images/noun_Download_1560897.svg').default} width="25" height="18" /><span className="px-2">Brochure </span>| </Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/Pricing">
                <img src={require('../../assets/images/noun_Compare_3133212.svg').default} width="25" height="18" /><span className="px-2">Compare </span> </Nav.Link>
            </Nav>
        </Container>
        <Offcanvas className="mobileMenu justify-content-start d-flex" show={show} onHide={handleClose} placement="bottom">
        {/* <Offcanvas.Header closeButton>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
        <Nav className=" navBar">
              <Nav.Link as={Link} className="navItem" to="/">About</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/admission">Admission</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#College/Universities">Academics</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#Get Involved">Costs</Nav.Link>
              <Nav.Link as={Link} className="navItem" to="#Get Involved">Campus Life</Nav.Link>
              {/* <NavDropdown
                id="nav-dropdown-dark-example"
                title="Others"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Nav className="navBar">
              <Nav.Link as={Link} className="navItem" to="/Products">
                <img src={require('../../assets/images/noun_Share_896160.svg').default} width="25" height="18" /> <span className="px-2">Share </span> </Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/Pricing">
                <img src={require('../../assets/images/noun_Download_1560897.svg').default} width="25" height="18" /><span className="px-2">Brochure </span></Nav.Link>
              <Nav.Link as={Link} className="navItem" to="/Pricing">
                <img src={require('../../assets/images/noun_Compare_3133212.svg').default} width="25" height="18" /><span className="px-2">Compare </span> </Nav.Link>
            </Nav> */}
        </Offcanvas.Body>
      </Offcanvas> 
      </Navbar>
    </div>
  );
}
export default SecondaryHeader