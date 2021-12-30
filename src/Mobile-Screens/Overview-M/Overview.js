import React from 'react';
import { Card, Row, Col, Container, Table, Nav, Button, Form, FormControl, FloatingLabel } from 'react-bootstrap';
import Slider from 'react-slick';
import './Overview.css'

const Overview = () => {
    const settings = {
        dots: false,
        arrows: true,
        accessibility: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
                    slidesToShow: 1.05,
                    slidesToScroll: 1
                }
            }
        ]
    };
   
    return (
        <div className="Overview">
            <section className="py-2">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div>

                                <Row>
                                    <Col className="p-2" md={12}>
                                        <h4 className="py-2">Overview</h4>
                                    </Col>
                                    <Col md={12} className="" >
                                        <div>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo Incididunt Ut Labore Et Dolore Magna Aliqua.
                                                Ut Enim Ad Minim Veniam, Quis No Strud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                                                Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore. Duis Aute Irure Dolor In.</p>
                                        </div>
                                    </Col>
                                    <Col md={12} className="" >
                                        <div>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo Incididunt Ut Labore Et Dolore Magna Aliqua.
                                                Ut Enim Ad Minim Veniam, Quis No Strud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                                                Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore. Duis Aute Irure Dolor In.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <hr />

                                <Row>
                                    <Col md={12} className="" >
                                        <div>
                                            <Table className="p-2 m-0" bsPrefix responsive="sm" size="lg" >
                                                <thead className="tableHead">
                                                    <tr bordered="false" >
                                                        <th className="px-4">Features</th>
                                                        <th className="px-4">Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="tableBorder" >
                                                        <td className="tableData px-4" >Course Name</td>
                                                        <td className="tableData px-4">Online MBA</td>
                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Course Level</td>
                                                        <td className="tableData px-4">Post Graduation</td>
                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Course Pedagogy</td>
                                                        <td className="tableData px-4">Online via video conferencing and Learning Management System (LMS)</td>

                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Online MBA Course Fee</td>
                                                        <td className="tableData px-4">INR 50,000 to INR 5 lakh and above</td>

                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Online MBA Eligibility Criteria</td>
                                                        <td className="tableData px-4">
                                                            <span>Graduation</span><br />
                                                            <span>Work experience (for some programmes)</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Online MBA Admission Process</td>
                                                        <td className="tableData px-4">Merit/entrance exam based</td>
                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Online MBA Duration</td>
                                                        <td className="tableData px-4">One year to two years</td>
                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Number of Colleges</td>
                                                        <td className="tableData px-4">There are 170+ colleges in India offering Online MBA</td>
                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Top Online MBA Specialisations</td>
                                                        <td className="tableData px-4">Sales, Marketing, Operations, Finance, Human Resources, Digital Marketing, Business Analytics</td>
                                                    </tr>
                                                    <tr className="tableBorder">
                                                        <td className="tableData px-4">Online MBA Average Salary</td>
                                                        <td className="tableData px-4">INR 5 lakh to 6 lakh</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                            <Row>
                                <Col md={12} className="p-2" >
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
                            <Row>
                                <Col md={12} >
                                    <h4>Trending Now</h4>
                                 
                                    <Slider {...settings}>
                                    <div className="p-1">
                                            <Card style={{ width: '100%',borderRadius:'20px' }}>
                                                <Card.Body>
                                                <Card.Text className="d-flex justify-content-start" > <span style={{backgroundColor:'#F4F9FF',padding:'10px',fontSize:'15px',borderRadius:'15px'}}>News</span></Card.Text>
                                                    <Card.Text className="d-flex justify-content-start" > <h5>Lorem Ipsum Dollar</h5></Card.Text>
                                                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                                                        <Row>
                                                            <Col md={12} className="p-0" >
                                                                <p>
                                                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo
                                                                </p>
                                                            </Col>
                                                        </Row>

                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="p-1">
                                            <Card style={{ width: '100%',borderRadius:'20px' }}>
                                                <Card.Body>
                                                <Card.Text className="d-flex justify-content-start" > <span style={{backgroundColor:'#F4F9FF',padding:'10px',fontSize:'15px',borderRadius:'15px'}}>News</span></Card.Text>
                                                    <Card.Text className="d-flex justify-content-start" > <h5>Lorem Ipsum Dollar</h5></Card.Text>
                                                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                                                        <Row>
                                                            <Col md={12} className="p-0" >
                                                                <p>
                                                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo
                                                                </p>
                                                            </Col>
                                                        </Row>

                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="p-1">
                                            <Card style={{ width: '100%',borderRadius:'20px' }}>
                                                <Card.Body>
                                                <Card.Text className="d-flex justify-content-start" > <span style={{backgroundColor:'#F4F9FF',padding:'10px',fontSize:'15px',borderRadius:'15px'}}>News</span></Card.Text>
                                                    <Card.Text className="d-flex justify-content-start" > <h5>Lorem Ipsum Dollar</h5></Card.Text>
                                                    <Card.Text className="d-flex justify-content-start p-1 m-1">
                                                        <Row>
                                                            <Col md={12} className="p-0" >
                                                                <p>
                                                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Lorem Ipsum Dolor Do Eiusmo
                                                                </p>
                                                            </Col>
                                                        </Row>

                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                    </Slider>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h5> Find More Colleges Like This</h5>
                                <Slider {...settings}>
                                    <div className="p-1">
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img variant="top" src={require('../../assets/images/download.png').default} />
                                            <Card.Body>
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                                                <Card.Text className="d-flex justify-content-center" > <h5>Indian Institute Of Technology</h5></Card.Text>
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
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>

    );


}

export default Overview;