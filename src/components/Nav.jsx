import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css'

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-4 fluid nav__bar position-fixed w-100 z-3">
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'> 
            <img src='./images/logo.png.webp' alt='Logo' />
          </Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='navbar__custom' id="basic-navbar-nav">
          <Nav className="me-auto gap-4 mx-5 my-3">
            <Link className='text-decoration-none nav__link' to="/">Home</Link>
            <Link className='text-decoration-none nav__link' to="/services">Services</Link>
            <Link className='text-decoration-none nav__link' to="/history">History</Link>
            <Link className='text-decoration-none nav__link' to="/blog">Blog</Link>
            <Link className='text-decoration-none nav__link' to="#">Pages</Link>
            <Link className='text-decoration-none nav__link' to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <a href="#" className='text-decoration-none visit__btn '>
        <button className='bottone1 btn py-3 px-5 text-nowrap'><strong>Visit Us</strong></button>
      </a>
    </Navbar>
  );
}
