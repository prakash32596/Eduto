import React from 'react';
import { Card, Row, Col, Container} from 'react-bootstrap';
import Slider from 'react-slick';
// import './Overview.css'

const EntranceExams = () => {
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
                                        <h4 className="py-2">Online MBA Eligibility & Entrance Exams</h4>
                                    </Col>
                                    <Col md={12}  >
                                        <div>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo Incididunt Ut Labore Et Dolore Magna Aliqua.
                                                Ut Enim Ad Minim Veniam, Quis No Strud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                                                Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore. Duis Aute Irure Dolor In.</p>
                                                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo Incididunt Ut Labore Et Dolore Magna Aliqua.
                                                Ut Enim Ad Minim Veniam, Quis No Strud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                                                Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore. Duis Aute Irure Dolor In.</p>
                                                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo Incididunt Ut Labore Et Dolore Magna Aliqua.
                                                Ut Enim Ad Minim Veniam, Quis No Strud Exercitation Ullamco Labnisi Ut Aliquip Ex Ea Commodo Consequat.
                                                Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore. Duis Aute Irure Dolor In.</p>
                                        </div>
                                    </Col>
    
                                </Row>
                            </div>
                            <div>
                            </div>
                            <Row>
                            <Col md={12} >
                            <h4>Related Topics</h4>
                            <Row>
                                <Col className="py-2" xs={12} sm={6}>
                            <span style={{backgroundColor:'#F4F9FF',padding:'10px',fontSize:'13px',fontWeight:'600',margin:'8px'}}>NIT, Nagpur</span>
                            <span style={{backgroundColor:'#F4F9FF',padding:'10px',fontSize:'13px',fontWeight:'600',margin:'8px'}}>Courses offered</span>
                            
                                
                                </Col>
                                <Col  className="py-4" xs={12}>
                            <span style={{backgroundColor:'#F4F9FF',padding:'10px',fontSize:'13px',fontWeight:'600',margin:'8px'}}>Cut off</span>
                            <span style={{backgroundColor:'#F4F9FF',padding:'10px',fontSize:'13px',fontWeight:'600',margin:'8px'}}>Dual Degree</span>
                            <span style={{backgroundColor:'#F4F9FF',padding:'10px',fontSize:'13px',fontWeight:'600',margin:'8px'}}>Dual Degree</span>

                                </Col>
                                <Col  className="py-2" xs={12}>
                            <span style={{backgroundColor:'#F4F9FF',padding:'15px',fontSize:'13px',fontWeight:'600',margin:'0px'}}>Department of Computer sciences and engineering</span>
                                
                                </Col>
                            </Row>
                            <p>
                            </p>
                            <p>

                            </p>
                            </Col>
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
                </Container>
            </section>

        </div>

    );


}

export default EntranceExams;