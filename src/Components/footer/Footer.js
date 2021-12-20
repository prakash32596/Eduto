// import logo from './logo.svg';
import './Footer.css';

import { Row, Col, Container, Navbar, Nav, Button } from 'react-bootstrap';


function Footer() {
    return (
        <div className="Header">
            <footer class="footer">
                <Container>
                    <Row>
                        <Col className="py-2 px-0" sm={3}  md={3} >
                            <div>
                                <h1 style={{color:'white',textAlign:'left'}}>Eduto.</h1>
                                <p style={{color:'white',textAlign:'left',fontSize:'12px'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do </p>
                            </div>
                        </Col>
                        <Col className="py-2 px-0" sm={2} xs={6}  md={2}>
                            <div>
                                <h6 style={{color:'#707070',}}>Company</h6>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link  className="navLink p-1" href="/home">Home</Nav.Link>
                                    <Nav.Link  className="navLink p-1" eventKey="link-1">Courses</Nav.Link>
                                    <Nav.Link  className="navLink p-1" eventKey="link-2">Universities/Colleges</Nav.Link>
                                    <Nav.Link  className="navLink p-1" eventKey="link-2">Products</Nav.Link>

                                </Nav>
                            </div>
                        </Col>
                        <Col className="py-2 px-2 " sm={2} xs={6}  md={2}>
                            <div>
                                <h6 style={{color:'#707070',}}>Other Links</h6>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link  className="navLink p-1" href="/home">Pricing</Nav.Link>
                                    <Nav.Link  className="navLink p-1" eventKey="link-1">Signup</Nav.Link>
                                    <Nav.Link  className="navLink p-1" eventKey="link-2">Get Involved</Nav.Link>
                                    <Nav.Link  className="navLink p-1" eventKey="link-2">Login</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        <Col className="py-2 px-0"  sm={4} xs={6} md={2}>
                            <div>
                                <h6 style={{color:'#707070',}}>Support</h6>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link  className="p-1 navLink" href="/home">Docs</Nav.Link>
                                    <Nav.Link  className="p-1 navLink" eventKey="link-1">Contact Us</Nav.Link>
                                    <Nav.Link className="p-1 navLink" eventKey="link-2">FAQS</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        <Col className="py-2 px-0"  sm={4} xs={10}  md={3}>
                            <div  className="p-0 m-0">
                                <h6  style={{color:'#707070',}}>Get In Touch</h6>
                                <p style={{color:'white',fontFamily:'Inter',fontWeight:'normal',fontSize:'14px' }}><img className="pr-2" src={require('../../assets/images/noun_call_2091475.svg').default} width="30" height="20" />(800) 342-5598</p>
                                <p style={{color:'white',fontFamily:'Inter',fontWeight:'normal',fontSize:'14px' }}><img className="pr-2" src={require('../../assets/images/noun_web_3847454.svg').default} width="30" height="20" />http://loremipusmdolorsit.edu/</p>
                                <p style={{color:'white',fontFamily:'Inter',fontWeight:'normal',fontSize:'14px' }}><img className="" src={require('../../assets/images/Group 26048.svg').default} width="130" height="40" /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>

    );
}

export default Footer;
