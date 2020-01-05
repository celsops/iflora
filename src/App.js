import React from 'react';
import { Nav,Navbar,Image, Carousel } from 'react-bootstrap';
import logo from './static/img/logo.svg'; 
import fundo from './static/img/fundo.svg';
import './static/css/App.css';  

function App() {
  return (
    <div>
        <div>
            <Navbar className="navbar" expand="lg" fixed="top">
                <Navbar.Brand href="#home">
                    <Image src={logo} className="logo" rounded></Image>
                </Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="mr-right">
                        <Nav.Link href="#inicio" className="nav-ativo" >Inicio</Nav.Link>
                        <Nav.Link href="#sobre">Sobre nós</Nav.Link>
                        <Nav.Link href="#login">Loign</Nav.Link>
                        <Nav.Link href="#cadastro">Cadastre-se</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Carousel>
                <Carousel.Item>
                    <Image
                        src={fundo}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{bottom:"240px"}}>
                        <h3>Sistema de cadastramento e publicações de eventos</h3>
                        <button className="btn-saber-mais">Saber mais</button>
                    </Carousel.Caption>
                </Carousel.Item>    
            </Carousel>
        </div>
    </div>
  );
}

export default App;
