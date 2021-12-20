// import logo from './logo.svg';
import './HomePage.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card, Col, Row, Navbar, Nav, ListGroup, Tab, Image, NavDropdown, InputGroup, InputForm, Form, FormControl, Button } from 'react-bootstrap';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';


function HomePage() {
  return (
    <div className="mainHomepage">
      <Header/>
      <section className="search" style={{ width: '100%', position: "", marginTop: '-77px', }}>
        <Container>
          <div className="searchicon">
            <Row>
              <Col sm={12} xs={12} md={4} >
                <Card className="d-flex justify-contnent-end" style={{ width: '16rem', height: '80px' }}>
                  <Card.Body className="p-0">
                    <Row>
                      <Col xs={5}>
                        <Card.Title className="d-flex justify-content-center px-4 py-2"  ><span style={{ backgroundColor: '#E5FAE9', width: '114px', fontSize: '7px', textAlign: 'center', padding: '18px', color: 'green', borderRadius: '100%' }}>
                          <img src={require('../assets/images/college.svg').default} width="30" height="30" /></span>
                        </Card.Title>
                      </Col>
                      <Col>
                        <Card.Text className=" text py-3" style={{ marginLeft: '-15px', }}>
                          Find Top Colleges For Your Degree
                        </Card.Text>

                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <div className="home-background">

                </div>
              </Col>
              <Col md={{ offset: 0, span: 4 }}>
                <Card style={{ width: '10rem', borderRadius: '10px', marginLeft: '90px' }}>
                  <Card.Body className="py-2">
                    <Row>
                        <Col sm={5} md={12}>
                    <Card.Title className="d-flex justify-content-center"  ><span style={{ backgroundColor: '#E5FAE9', width: '114px', fontSize: '30px', textAlign: 'center', padding: '10px', color: 'green' }}>25K+</span></Card.Title>
                    </Col>
                        <Col>
                    <Card.Text className="text d-flex justify-content-center" >
                      <span style={{ textAlign: 'center' }}>Best Colleges</span>
                    </Card.Text>

                    </Col>
                      </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm={12}  md={12} >


                <h1 className=" text headingSection d-flex justify-content-center p-3" style={{
                  fontFamily: 'inter',
                  fontWeight: '900',
                  fontSize: '52px'
                }}>Find The Right College For <span xs={4} style={{ color: '#0278FF' }}> You</span></h1>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <div className="seachSection">
                  {/* <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        Username
      </Form.Label> */}
                  <InputGroup className="mb-2 searchField" size="lg"  >
                    <InputGroup.Text className="searchInputGroup"><i class="fa fa-search" style={{ color: '#0278FF' }} aria-hidden="true"></i></InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" className="searchInputField" placeholder="Start Searching By College Name Or University..." />
                  </InputGroup>
                </div>
              </Col>
            </Row>
            <Row >
              <Col md={4}>
                <Card style={{ width: '12rem', borderRadius: '10px', marginLeft: '-30px' }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  ><span style={{ backgroundColor: '#E5FAE9', width: '114px', fontSize: '30px', textAlign: 'center', padding: '10px', color: 'green' }}>100K+</span></Card.Title>
             
                    <Card.Text className="text d-flex justify-content-center" >
                      <span style={{ textAlign: 'center' }}>Got Admission In Best Colleges</span>
                    </Card.Text>

                    {/* </Col>
                      </Row> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={{ span: 4, offset: 4 }} >
                <Card className="bestCard" style={{ width: '16rem', height: '80px', marginLeft: '200px' }}>
                  <Card.Body className="p-0">
                    <Row>
                      <Col xs={5}>
                        <Card.Title className="d-flex justify-content-center px-4 py-2"  >
                          <span style={{ backgroundColor: '#E5FAE9', width: '114px', fontSize: '7px', textAlign: 'center', padding: '18px', color: 'green', borderRadius: '100%' }}>
                            <img src={require('../assets/images/star (1).svg').default} width="30" height="30" /></span></Card.Title>
                      </Col>
                      <Col>
                        <Card.Text className="text py-3 " style={{ marginLeft: '-15px', }}>
                          Get Best From <br /> The Best
                        </Card.Text>

                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="col-xs-12" style={{ position: "", marginTop: "-50px", paddingBottom: "50px", ZIndex: -11 }}>
            <div className="searchicon2">
              <Row  className="categorySection" style={{ marginTop: '-60px' }}>

                <Col sm={6} md={{ span: 8, offset: 2 }} >
                  <Card style={{ width: '100%', borderRadius: '10px' }}>
                    <Card.Body style={{ width: '100%'}}>
                      <p className="text d-flex justify-content-center" style={{ marginTop: '0' }} >Choose A Category To Start Exploring</p>
                      <Row>
                        <Col className="py-2" xs={6} md={3} >
                          <Card.Title className="d-flex justify-content-center"  >
                            <img src={require('../assets/images/location (4).svg').default} width="150" height="40" /></Card.Title>
                          <Card.Text className="text d-flex justify-content-center" >
                            <span style={{ textAlign: 'center' }}>Location</span>
                          </Card.Text>

                        </Col>
                        <Col className="py-2" xs={6} md={3}>
                          <Card.Title className="d-flex justify-content-center"  >
                            <img src={require('../assets/images/school (1).svg').default} width="150" height="40" /></Card.Title>
                          <Card.Text className="text d-flex justify-content-center" >
                            <span style={{ textAlign: 'center' }}>Programe</span>
                          </Card.Text>

                        </Col >
                        <Col className="py-2" xs={6} md={3}>
                          <Card.Title className="d-flex justify-content-center"  >
                            <img src={require('../assets/images/campus.svg').default} width="150" height="40" /></Card.Title>
                          <Card.Text className="text d-flex justify-content-center" >
                            <span style={{ textAlign: 'center' }}>College Type</span>
                          </Card.Text>

                        </Col>
                        <Col className="py-2" xs={6} md={3}>
                          <Card.Title className="d-flex justify-content-center"  >
                            <img src={require('../assets/images/student (2).svg').default} width="150" height="40" /></Card.Title>
                          <Card.Text className="text d-flex justify-content-center" >
                            <span style={{ textAlign: 'center' }}>Campus Type</span>
                          </Card.Text>

                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            <div className="homeServiceSection">

            </div>
          </div>
        </Container>

      </section>
      <section className="editoSection" style={{ width: '100%' }}>
        <Container>
          <div  >
            <h4 className="headingSection d-flex justify-content-center py-5" style={{
              fontFamily: 'inter',
              fontWeight: '900',
              fontSize: '30px'
            }}>How Edito Can  <span style={{ color: '#0278FF' }}> Help You?</span></h4>
            <Row>
              <Col className="py-4" sm>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../assets/images/harvard-university-cambridge-usa@2x.png').default} />
                  <Card.Body>
                    <Card.Title className="text d-flex justify-content-center">Find Your Best Matches</Card.Title>
                    <Card.Text className="d-flex justify-content-center" >
                      Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col className="py-4" sm>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../assets/images/mimi-thian-vdXMSiX-n6M-unsplash.png').default} />
                  <Card.Body>
                    <Card.Title className="text d-flex justify-content-center">Application Guidance</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col className="py-4" sm>
                <Card style={{ width: '100%'}}>
                  <Card.Img variant="top" src={require('../assets/images/anete-lusina-rFKBUwLg_WQ-unsplash@2x.png').default} />
                  <Card.Body>
                    <Card.Title className="text d-flex justify-content-center" >Visa & Travel Advice</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </div>
        </Container>
      </section>
      <section style={{ width: '100%' }}>
        <div>
          <Container>
            <h4 className="headingSection d-flex justify-content-center py-5" style={{
              fontFamily: 'inter',
              fontWeight: '900',
              fontSize: '30px'
            }}>How Edito Can  <span style={{ color: '#0278FF' }}> Help You?</span></h4>
            <Tab.Container id="list-group-tabs-example me-auto" defaultActiveKey="#link1">
              <Row>
                {/* <Col>
             <div className="Ofering section">
               <h6></h6>
             </div>
            
            </Col>
            <Col>
            <img src={require('../assets/images/vasily-koloda-8CqDvPuo_kI-unsplash@2x.png').default} width="500" height="400" />
            </Col> */}
                <Col sm={6}>

                  <ListGroup bsPrefix="listItemGroup" variant="flush">
                    <ListGroup.Item className="listGroupItem" action href="#link1">
                      <h6><img src={require('../assets/images/ranking.svg').default} width="60" height="30" /> University Rankings</h6>
                      <p className="offeringList">Compare Top Universities From Around The World By Subject, Destination And More.</p>
                      {/* Cras justo odio */}
                    </ListGroup.Item >
                    <ListGroup.Item className="listGroupItem" action href="#link2">
                      <h6> <img src={require('../assets/images/pathway.svg').default} width="60" height="30" />Career Guidance</h6>
                      <p className="d-none offeringList">Compare Top Universities From Around The World By Subject, Destination And More.</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" action href="#link3">
                      <h6><img src={require('../assets/images//flight.svg').default} width="60" height="30" />Study Abroad</h6>
                      <p className="d-none">Compare Top Universities From Around The World By Subject, Destination And More.</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" action href="#link4">
                      <h6><img src={require('../assets/images/scholarship.svg').default} width="60" height="30" />Scholarships</h6>
                      <p className="d-none">Compare Top Universities From Around The World By Subject, Destination And More.</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" action href="#link5">
                      <h6><img src={require('../assets/images/graduate.svg').default} width="60" height="30" />Find A Suitable Course</h6>
                      <p className="d-none">Compare Top Universities From Around The World By Subject, Destination And More.</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" action href="#link6">
                      <h6><img src={require('../assets/images/event.svg').default} width="60" height="30" />Events</h6>
                      <p className="d-none">Compare Top Universities From Around The World By Subject, Destination And More.</p>
                    </ListGroup.Item>


                  </ListGroup>
                </Col>
                <Col sm={6} md={6} >
                  <Tab.Content >
                    <Tab.Pane  eventKey="#link1">
                      <Container>
                      <img src={require('../assets/images/vasily-koloda-8CqDvPuo_kI-unsplash@2x.png').default} width="500" height="400" />
                      </Container>
                    </Tab.Pane>
                    <Tab.Pane   eventKey="#link2">
                      <Container>
                      <img src={require('../assets/images/vasily-koloda-8CqDvPuo_kI-unsplash@2x.png').default} width="500" height="400" />
                      </Container>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </div>
      </section>
      <section className="py-5" style={{ minHeight: '400px', width: '100%' }}>
        <Container>
          <Row md={12}>
            <Col className="bannerImage  p-0" sm md={{ span: 8, offset:2 }}>
                  <Row>
                    <Col sm={4} md={8} className="bannerCircle" >
                      <Card.Text  className="py-2" >
                        <h1 className="bannerHeading">Ranked Among The Top 3%</h1>
                        <h1 className="bannerHeading">Universities  Globally</h1>
                          <p className="col-md-9 col-sm-4" >Compare Top Universities From Around The World By Subject, Destination And More.</p>
                      </Card.Text>
                      <Button href="#">Know More</Button>
                    </Col>
                    <Col sm={4}  md={4}  className="py-4 d-flex justify-content-end sponsoredTag" >
                      <div>

                    
                      <span className="sponsored"style={{backgroundColor:'#0000001A',color:'white', height:'auto',padding:'8px', borderRadius:'20px'}} > <img src={require('../assets/images/Advertise 2.svg').default} width="30" height="15" /> sponsered</span>
                      </div>
                    </Col>
                  </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blogSection" style={{ width: '100%' }} >
        <Container>
          <div className="py-4">
            <Container>
            <Row>
              <Col className="py-4" md={4} sm>
                <div style={{  width: '100%', paddingTop: '60px' }}>
                  {/* <Card.Img variant="top" src={require('../assets/images/harvard-university-cambridge-usa@2x.png').default} /> */}
                  <Card.Body>
                    <Card.Title className="">
                      <h5 className="headingSection" style={{
                        fontFamily: 'inter',
                        fontWeight: '900',
                        fontSize: '30px',
                        textAlign: 'left'
                      }}>Our  <span style={{ color: '#0278FF' }}> Blogs</span></h5>
                    </Card.Title>
                    <Card.Text className="d-flex justify-content-center" style={{ textAlign: 'left' }} >
                      Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </div>
              </Col>
              <Col  className="py-4" md={4} sm>
                <Card style={{  width: '100%' }}>
                  <Card.Img variant="top" src={require('../assets/images/mimi-thian-vdXMSiX-n6M-unsplash.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center"  >Application Guidance</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col  className="py-4" md={4} sm>
                <Card style={{  width: '100%' }}>
                  <Card.Img variant="top" src={require('../assets/images/anete-lusina-rFKBUwLg_WQ-unsplash@2x.png').default} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center" >Visa & Travel Advice</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </Container>
          </div>
          <div>
            <Row>
              <Col  className="py-4" sm>
                <Card style={{  width: '100%' }}>
                  <Card.Img variant="top" src={require('../assets/images/harvard-university-cambridge-usa@2x.png').default} />
                  <Card.Body>
                    <Card.Title className="text d-flex justify-content-center">Find Your Best Matches</Card.Title>
                    <Card.Text className="d-flex justify-content-center" >
                      Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col  className="py-4" md={4} sm>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={require('../assets/images/mimi-thian-vdXMSiX-n6M-unsplash.png').default} />
                  <Card.Body>
                    <Card.Title className="text d-flex justify-content-center"  >Application Guidance</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col  className="py-4" md={4} sm>
                <Card style={{  width: '100%', height: '360px', backgroundColor: '#002B64', color: 'white' }}>
                  {/* <Card.Img variant="top" src={require('../assets/images/anete-lusina-rFKBUwLg_WQ-unsplash@2x.png').default} /> */}
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center py-5 text" >LOREM IPUSM</Card.Title>
                    <Card.Text className="d-flex justify-content-center " >
                      <p style={{ textAlign: 'center' }}>Lorem Ipsum Dolor Sit Amet, Consect Etur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore
                        Magna Aliqua.</p>

                    </Card.Text>
                    <p style={{ textAlign: 'center' }}> <Button href="#">Explore More</Button></p>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="querySection col-md-12" style={{ width: '100%' }}>
        <Container>
          <Row>
            <Col sm={6} md={6} style={{ marginTop: '80px' }}>
              <div class="d-flex justify-content-center">
              <img src={require('../assets/images/queryimage.PNG').default} />
              </div>
            </Col>
            <Col sm={4} md={6}>
              <div class="" style={{ marginTop: '90px' }} >
                <h5 className="headingSection" style={{
                  fontFamily: 'inter',
                  fontWeight: '900',
                  fontSize: '30px',
                }}>Got Any <span style={{ color: '#0278FF' }}>  Query?</span></h5>
                <span  className="secondaryText">We Are Here To Assist You.</span>
              </div>

              <Row >
                <Col sm={5} md={12} style={{ marginTop: '30px' }}>
                  <Card style={{ width: '100%', height: 'auto' }}>
                    <Card.Body className="p-0 d-flex justify-content-center">
                      <Row>
                        <Col sm={5} md={4}>
                          <Card.Title className="d-flex justify-content-center p-3"  ><span style={{ backgroundColor: '#E5FAE9', fontSize: '7px', height: 'auto', textAlign: 'center', padding: '23px', color: 'green', borderRadius: '20%' }}>
                            <img src={require('../assets/images/Group 30883.svg').default} width="90" height="90" /></span>
                          </Card.Title>
                        </Col>
                        <Col sm={8} md={8} >
                          <Card.Text className="py-4 my-0" style={{ marginLeft: '-15px', padding: '30px' }}>
                            <p><span style={{ fontFamily: 'Inter', fontWeight: 'bold', color: '#001632', }}>Are You A Student?</span><br />
                              <span style={{ fontFamily: 'Inter', fontSize: '12px' }}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Inci Didunt Ut Labore.</span></p>

                            <p className="py3"><Button href="#">Signup For Free</Button></p>
                          </Card.Text>

                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col >
              </Row>
              <Row >
                <Col sm={6} md={12} style={{ marginTop: '30px', paddingBottom: '20px' }}>
                  <Card style={{ width: '100%', height: 'auto' }}>
                    <Card.Body className="p-0 d-flex justify-content-center">
                      <Row>
                        <Col sm={6} md={4}>
                          <Card.Title className="d-flex justify-content-center p-3"  ><span style={{ backgroundColor: '#E5FAE9', fontSize: '7px', height: 'auto', textAlign: 'center', padding: '23px', color: 'green', borderRadius: '20%' }}>
                            {/* <i class="fa fa-search m-0" style={{ color: '#0278FF',fontSize:'26px' }} aria-hidden="true"></i></span> */}
                            <img src={require('../assets/images/Group 30884.svg').default} width="90" height="90" /></span>
                          </Card.Title>
                        </Col>
                        <Col sm={8} md={8} >
                          <Card.Text className="py-4 my-0" style={{ marginLeft: '-15px', padding: '30px' }}>
                            <p><span style={{ fontFamily: 'Inter', fontWeight: 'bold', color: '#001632', }}>Are You A University/College?</span><br />
                              <span style={{ fontFamily: 'Inter', fontSize: '12px' }}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Inci Didunt Ut Labore.</span></p>

                            <p className="py3"><Button href="#">Signup For Free</Button></p>
                          </Card.Text>

                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col >
              </Row>
            </Col>

          </Row>
          <Row>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>

  );
}

export default HomePage;
