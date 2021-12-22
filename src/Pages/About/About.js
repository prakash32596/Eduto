import React, { useState } from 'react';
import './About.css';
import { Carousel } from 'react-bootstrap';
import { Card, Row, Col, Container, Navbar, Nav, Button, Form, FormControl, FloatingLabel } from 'react-bootstrap';
import Slider from 'react-slick';

const About = () => {
  const settings = {
    dots: false,
    arrows: true,
    accessibility: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="About">
      <section className="sliderSelection">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 imgCarousel"
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
              className="d-block w-100 imgCarousel"
              src={require('../../assets/images/gallery2.PNG').default}
              height="400"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="py-2">
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
                    <span className=""><i  class="fa fa-info-circle" aria-hidden="true"></i></span> <span className="px-2">4-Year</span>
                    <span className="p-2"><i style={{ fontSize: '10px' }} class="fa fa-circle px-2"  aria-hidden="true"></i>Private</span>
                    <span className="p-2"><i class="fa fa-circle px-2" style={{ fontSize: '10px' }} aria-hidden="true"></i>Medium</span>
                    <span className="py-2"><i class="fa fa-circle px-2" style={{ fontSize: '10px' }} aria-hidden="true"></i>Urban</span>
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
                          <Nav.Link className="navTabLink" eventKey="link-1">View Online Application <i class="fa fa-angle-right" style={{ paddingLeft: '20px' }} aria-hidden="true"></i></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navTabItem">
                          <Nav.Link className="navTabLink" eventKey="link-2">Estimate Your Net Cost <i class="fa fa-angle-right" style={{ paddingLeft: '20px' }} aria-hidden="true"></i></Nav.Link>
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
                      <Col xs={2} md={1}>
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
                      <Col xs={8} md={11}>
                        <div>
                          <p className="py-1">
                            Puneet Singh <br />
                            <span>2016-02-17 18:07:11</span>
                          </p>
                        </div>
                      </Col>
                          <p className="px-4">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                            Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore.

                          </p>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={2} md={1}>
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
                      <Col xs={8} md={11}>
                        <div>
                          <p className="p-0">
                            Puneet Singh <br />
                            <span>2016-02-17 18:07:11</span>
                          </p>
                        </div>
                      </Col>
                          <p className="px-4">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                            Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore.

                          </p>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={2} md={1}>
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
                      <Col xs={8} md={11}>
                        <div>
                          <p className="p-0">
                            Puneet Singh <br />
                            <span>2016-02-17 18:07:11</span>
                          </p>
                        </div>
                      </Col>
                          <p className="px-4">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                            Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore.

                          </p>
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
                    <h4>Trending Now</h4>
                    <h6>NEWS</h6>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div>
                    <h6>ARTICLE</h6>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div>
                    <h6>NEWS</h6>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div>
                    <h6>ARTICLE</h6>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div>
                    <h6>NEWS</h6>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo</p>
                  </div>
                  <hr />
                  <div className="py-4">
                    <h4>Advertisement</h4>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/image (3)@2x.png').default}
                      height="auto"
                      alt="Second slide"
                    />
                  </div>
                  <div className="py-2">
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/image (4)@2x.png').default}
                      height="auto"
                      alt="Second slide"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div>
            <h5> Find More Colleges Like This</h5>
            <Slider {...settings}>
              <div className="p-1">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="p-1">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="p-1">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="p-1">
              <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="p-1">
              <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="p-1">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="p-1">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="p-1">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="p-1">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Indian Institute Of Technology</Card.Title>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-map-marker" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">Delhi, India</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                      <Row>
                        <Col md={12} className="p-0" >
                          <span className=""><i class="fa fa-info-circle" style={{ fontSize: '14px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-1">4-Year</span>
                          <span className="p-1" style={{ fontSize: '13px' }}><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Private</span>
                          <span style={{ fontSize: '13px' }} className="p-1"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="px-0">Medium</span>
                          <span style={{ fontSize: '13px' }} className="p-0"><i class="fa fa-circle px-1" style={{ fontSize: '10px' }} aria-hidden="true"></i></span>
                          <span style={{ fontSize: '14px' }} className="p-0">Urban</span>
                        </Col>
                      </Row>

                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>
                          <span style={{ fontSize: '14px' }}>Courses Offered</span><br />
                          <span style={{ fontSize: '14px' }}>B.E./B.Tech, M.E./M.Tech, B.Sc... 4 More</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <Row>
                        <Col>

                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    </div>

  );
}

export default About;