// import logo from './logo.svg';
import './Header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {Row,Col, Container, Navbar, Nav, Button } from 'react-bootstrap';


function Header() {
  return (
    <div className="Header">
      <Row>
        <Col  md={12} xs={12}   sm={12}>
      {/* <Navbar style={{ backGround: 'transparent', position: "",zIndex:'99',width:"100%" }}  expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand className="brandLogo" href="#home">Eduto</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navItem" href="#home">Home</Nav.Link>
            <Nav.Link className="navItem" href="#Courses">Courses</Nav.Link>
            <Nav.Link className="navItem" href="#College/Universities">College/Universities</Nav.Link>
            <Nav.Link className="navItem" href="#Get Involved">Get Involved</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Button href="#"> Signup</Button>

        </Container>
      </Navbar> */}
      <Navbar className="navSectioin" bg="" expand="lg">
    <Container>
    <Navbar.Brand className="brandLogo" href="#home">Eduto .</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
            <Nav.Link className="navItem" href="#home">Home</Nav.Link>
            <Nav.Link className="navItem" href="#Courses">Courses</Nav.Link>
            <Nav.Link className="navItem" href="#College/Universities">College/Universities</Nav.Link>
            <Nav.Link className="navItem" href="#Get Involved">Get Involved</Nav.Link>
          </Nav>

    </Navbar.Collapse>
          <Button href="#"> Signup</Button>
    </Container>
    </Navbar>
      </Col>
      </Row>
    </div>

  );
}

export default Header;
