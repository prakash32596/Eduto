// import logo from './logo.svg';
import './App.css';
import { Container, Card, Col, Row, Navbar, Nav, ListGroup, Tab, Image, NavDropdown, InputGroup, InputForm, Form, FormControl, Button } from 'react-bootstrap';
import Header from './Components/header/Header';
import HomePage from './Landing-Page/HomePage';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage/>
      <Footer/>
    </div>

  );
}

export default App;
