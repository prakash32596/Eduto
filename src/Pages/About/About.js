import React, { useState } from 'react';
import './About.css';
import { Carousel } from 'react-bootstrap';
import { Card, Row, Col, Container, Navbar, Nav, Button, Form, FormControl, FloatingLabel } from 'react-bootstrap';


const About = () => {
  return (
    <div className="About">
      <section className="sliderSelection">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../assets/images/gallery.PNG').default}
              height="400"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../assets/images/gallery2.PNG').default}
              height="400"
              alt="Second slide"
            />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={8}>
              <div>
                <Row>
                  <Col className="p-2" md={12}>
                    <h4 className="py-2">Overview</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="p-2" md={12}>
                    <span className=""><i class="fa fa-graduation-cap" aria-hidden="true"></i></span> <span className="p-2">63%</span> <span className="p-2" >Graduation Rate</span>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col md={6} className="p-2" >
                    <span className=""><i class="fa fa-info-circle" aria-hidden="true"></i></span> <span className="px-2">4-Year</span><span className="p-2"><i class="fa fa-circle px-2" aria-hidden="true"></i>Private</span><span className="p-2"><i class="fa fa-circle px-2" aria-hidden="true"></i>Medium</span><span className="py-2"><i class="fa fa-circle px-2" aria-hidden="true"></i>Urban</span>
                  </Col>
                  <Col md={6} className="p-2">
                    <span className="p-2"><i class="fa fa-inr px-2" aria-hidden="true"></i>$28K</span><span className="p-2">Average Per Year After Aid</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="p-2" >
                    <span><i class="fa fa-star" aria-hidden="true"></i>
                    </span> <span className="p-2">4.7</span>|<span className="p-2"><i class="fa fa-map-marker px-3" aria-hidden="true"></i>
                      Kanpur</span>|<span className="p-2"><i class="fa fa-phone px-2" aria-hidden="true"></i>(800) 342-5598</span>|<span className="p-2"><i class="fa fa-laptop px-2" aria-hidden="true"></i>http://loremipsumdolorsit.edu</span>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={12} className="" >
                    <div>
                      <h5>More About The College</h5>
                      <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo Incididunt Ut Labore Et Dolore Magna Aliqua.
                        Ut Enim Ad Minim Veniam, Quis No Strud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                        Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore. Duis Aute Irure Dolor In.</p>
                    </div>
                  </Col>
                </Row>

              </div>
              <hr />
              <Row>
                <Col md={6} className="p-2" >
                  <div>
                    <h5>College Board Code</h5>
                    <p>3465</p>
                  </div>
                </Col>
                <Col md={6} className="p-2">
                  <div>
                    <h5>Fee Waiver Info</h5>
                    <p>Apply For Free: No Waiver Required.</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="p-2" >
                  <div>
                    <h5>Application Types Accepted</h5>
                    <p>Common Application, Online Through College’s Own Website</p>
                  </div>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="p-2" >
                  <div>
                    <h5>Next Steps</h5>
                    <div className="py-4">
                      <Nav className="navTab" variant="pills" defaultActiveKey="#">
                        <Nav.Item className="navTabItem">
                          <Nav.Link className="navTabLink" href="#">Visit College Website <i class="fa fa-angle-right" style={{ paddingLeft: '36px' }} aria-hidden="true"></i></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navTabItem">
                          <Nav.Link className="navTabLink" eventKey="link-1">View Online Application <i class="fa fa-angle-right" style={{ paddingLeft: '28px' }} aria-hidden="true"></i></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navTabItem">
                          <Nav.Link className="navTabLink" eventKey="link-2">Estimate Your Net Cost <i class="fa fa-angle-right" style={{ paddingLeft: '36px' }} aria-hidden="true"></i></Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <h5 className="py-4">Contact Information</h5>
                      <img
                        className="d-block w-100"
                        src={require('../../assets/images/Rectangle 5906.png').default}
                        width="100"
                        height="auto"
                        alt="First slide"
                      />
                      <div className="py-4">
                        <p className="py-2">
                          <span className=""><i class="fa fa-map-marker px-3" aria-hidden="true"></i>
                            Lorem Ipsum Dolor Sit Amet</span>
                        </p>
                        <p className="py-2">
                          <span className="p-2"><i class="fa fa-phone px-2" aria-hidden="true"></i>(800) 342-5598</span>
                        </p>
                        <p className="py-2">
                          <span className="p-2"><i class="fa fa-laptop px-2" aria-hidden="true"></i>http://loremipsumdolorsit.edu</span>
                        </p>

                      </div>
                    </div>
                  </div>
                  <div>
                    <h5>Reviews And Ratings <span> (48)</span></h5>
                    <FloatingLabel className="py-2" controlId="floatingTextarea2" label="">
                      <Form.Control
                        as="textarea"
                        placeholder="Write Your Review Here…"
                        style={{ height: '100px' }}
                      />
                    </FloatingLabel>
                    <Button style={{ width: '200px' }} variant="primary" size="md">
                      Post
                    </Button>
                  </div>
                  <div className="py-4" style={{}}>
                    <Row>
                      <Col md={1}>
                        <div className="py-1">
                        <img
                          className="d-block"
                          src={require('../../assets/images/Ellipse 11.png').default}
                          width="50"
                          height="50"
                          alt="First slide"
                        />
                        </div>
                      </Col>
                      <Col md={11}>
                        <div>
                          <p className="p-0">
                            Puneet Singh <br/>
                            <span>2016-02-17 18:07:11</span>
                          </p>
                          <p>
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                            Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore.

                          </p>
                        </div>
                      </Col>
                    </Row>
                    
                    <hr/>
                    <Row>
                      <Col md={1}>
                        <div className="py-1">
                        <img
                          className="d-block"
                          src={require('../../assets/images/Ellipse 12.png').default}
                          width="50"
                          height="50"
                          alt="First slide"
                        />
                        </div>
                      </Col>
                      <Col md={11}>
                        <div>
                          <p className="p-0">
                            Puneet Singh <br/>
                            <span>2016-02-17 18:07:11</span>
                          </p>
                          <p className="p-0">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                            Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore.

                          </p>
                        </div>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col md={1}>
                        <div className="py-1">
                        <img
                          className="d-block"
                          src={require('../../assets/images/Ellipse 13.png').default}
                          width="50"
                          height="50"
                          alt="First slide"
                        />
                        </div>
                      </Col>
                      <Col md={11}>
                        <div>
                          <p className="p-0">
                            Puneet Singh <br/>
                            <span>2016-02-17 18:07:11</span>
                          </p>
                          <p>
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                            Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore.

                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr />
                </Col>
              </Row>
            </Col>
            <Col md={4} className="py-3" >
              <Row>
                <Col md={12} >
                  <div>
                    <h5>NEWS</h5>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div>
                    <h5>ARTICLE</h5>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div>
                    <h5>NEWS</h5>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div>
                    <h5>ARTICLE</h5>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div>
                    <h5>NEWS</h5>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div className="py-4">
                    <h5>Advertisement</h5>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/image (3)@2x.png').default}
                      height="400"
                      alt="Second slide"
                    />
                  </div>
                  <div className="py-2">
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/image (4)@2x.png').default}
                      height="400"
                      alt="Second slide"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>

  );
}

export default About;