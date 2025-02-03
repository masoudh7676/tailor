import React from 'react'
import { Container, Card, Row, Col, } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineTablet  } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import './contact.css'
import Footer from './Footer';
export default function Contact() {
    return (
        <>
            <div className='position-relative d-flex justify-content-end  img__containerH bg-white mb-5'>
                <img src="./images/gallery.jpg.webp" className='image__custom object-fit-cover' alt="" />
                <h2 className='text-capitalize position-absolute text-white top-50 fw-bold history__title'>contact us</h2>
            </div>
            <Container style={{marginBottom: '12rem'}}>
                <Row>
                    <Col>
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1 custom__font" className="form-label fw-bold fs-4">Get in Touch</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <input type="text" class="form-control form-control-lg" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control form-control-lg" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="my-5">
                            <input type="text" className="form-control form-control-lg" id="formGroupExampleInput" placeholder="Your Subject"/>
                        </div>
                        <button type='submit' className='btn text-uppercase submit__btn w-25'>send</button>
                        </form>
                    </Col>
                    <Col xs = {7}>
                            <div className='d-flex justify-content-center'>
                                    <div>
                                    <AiOutlineHome className='fs-2 mt-2 mx-3' style={{color: '#8f9195'}}/>
                                    </div>
                                    <div className='mx-3'>
                                        <p className='custom__font'>Buttonwood, California.</p>
                                        <span style={{color: '#8f9195'}}>Rosemead, CA 91770</span>
                                    </div>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                    <div>
                                    <AiOutlineTablet className='fs-2 mt-2 mx-3' style={{color: '#8f9195'}}/>
                                    </div>
                                    <div className='mx-3'>
                                        <p className='custom__font'>+1 253 565 2365</p>
                                        <span style={{color: '#8f9195'}}>Mon to Fri 9am to 6pm</span>
                                    </div>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                    <div>
                                    <BsEnvelope className='fs-2 mt-2 mx-4' style={{color: '#8f9195'}}/>
                                    </div>
                                    <div>
                                        <p className='custom__font'>haselimasoud@gmail.com</p>
                                        <span style={{color: '#8f9195'}}>Contact Me Any Time</span>
                                    </div>
                            </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
