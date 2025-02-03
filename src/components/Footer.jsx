import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import { RiFacebookFill, RiTwitterFill, RiGlobalLine } from "react-icons/ri";
import { Container, Card, Row, Col, Button, Image, Nav } from 'react-bootstrap';
import footerImg from './images/footer_bg.jpg.webp'
export default function Footer() {
  return (
    <>
      <div className='footer__section'>
        <div className='img__box--footer overflow-hidden position-relative'>
          <img src="footerImg" alt="" />
          <div className='text__box--footer overflow-hidden position-absolute text-white h-100 end-0'>
            <h3 className='text-capitalize position-relative title'>The joy of dressing <br /> is an art</h3>
            <div className='line position-relative mt-5'></div>
            <Row className='mt-5'>
              <Col >
                <h5 className='josefin__font fs-3 mb-5'>contact</h5>
                <p className='contact'>71 Madison Ave 10013 New York, 914 <br />-309701, 914-329211,<br /> reservations@laurent.com ,<br /> office@laurent.com</p>
              </Col>
              <Col >
                <h5 className='fs-3 mb-5'>Links</h5>
                <Nav className=' flex-column gap-3'>
                  <Link className='text-decoration-none text-white text-capitalize' to="/">Home</Link>
                  <Link className='text-decoration-none text-white text-capitalize' to="/history">Our History</Link>
                  <Link className='text-decoration-none text-white text-capitalize' to="/gallery">Gallery</Link>
                  <Link className='text-decoration-none text-white text-capitalize' to="contact">Contact</Link>
                </Nav>
              </Col>
              <Col >
                <h5 className='josefin__font fs-3'>Social</h5>
                <a href="#" className='mx-2 text-white'>
                  <RiFacebookFill />
                </a>
                <a href="#" className='mx-2 text-white'>
                  <RiTwitterFill />
                </a>
                <a href="#" className='mx-2 text-white'>
                  <RiGlobalLine />
                </a>
              </Col>
            </Row>
          </div>
        </div>
        <div className='text__box--footer2 text-white p-5 d-xl-none'>
          <h3 className='text-capitalize'>The joy of dressing <br /> is an art</h3>
          <div className='line position-relative my-5'></div>
          <Row>
            <Col sm={5}>
              <h5 className='josefin__font fs-3'>Contact</h5>
              <p className='contact'>71 Madison Ave 10013 New York, 914 <br />-309701, 914-329211,<br /> reservations@laurent.com ,<br /> office@laurent.com</p>
            </Col>
            <Col>
              <h5 className='josefin__font fs-3'>Links</h5>
              <Nav className=' flex-column gap-3'>
                <Link className='text-decoration-none text-white text-capitalize' to="/">Home</Link>
                <Link className='text-decoration-none text-white text-capitalize' to="/history">Our History</Link>
                <Link className='text-decoration-none text-white text-capitalize' to="/blog">Blog</Link>
                <Link className='text-decoration-none text-white text-capitalize' to="contact">Contact</Link>
              </Nav>
            </Col>
            <Col>
              <Col >
                <h5 className='josefin__font fs-3'>Social</h5>
                <a href="#" className='mx-2 text-white'>
                  <RiFacebookFill />
                </a>
                <a href="#" className='mx-2 text-white'>
                  <RiTwitterFill />
                </a>
                <a href="#" className='mx-2 text-white'>
                  <RiGlobalLine />
                </a>
              </Col>
            </Col>
          </Row>
        </div>
      </div>

    </>
  )
}
