import React from 'react';
import './main.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { RiFacebookFill,  RiTwitterFill , RiGlobalLine } from "react-icons/ri";
import History from './HistoryC';
import Main2 from './Main2';

export default function Main() {
  return (
    <>
      <Container fluid style={{ backgroundColor: '#212529' }}>
        <Main2/>
          <History/>
        <Row className='align-items-center text-center mt-5 p-4 flex-md-column flex-xl-row'>
          <Col xs={12} md={5}>
            <div>
              <span className='location__title fs-1 text-capitalize'>
                Our Location
              </span>
              <h3 className='location__title2 text-capitalize'>
                Visit Our Tailor
              </h3>
              <p className='location__address text-white'>71 Madison Ave 10013 New York, 914-309701, 914-329211 ,<br />
                reservations@laurent.com, office@laurent.com</p>
              <p className='location__hours text-white'>
                Opening hours: <br />
                Mon – Thu: 10.00 am – 01:00 am  <br />
                Fri – Sun: 10:00 am – 02:00 am
                <br />
                <br />
                <>
                <a href="#" style= {{color: '#c6a16e'}} className='mx-2'>
                <RiFacebookFill style={{color: '#c6a16e'}}/>
                </a>
                <a href="#" style= {{color: '#c6a16e'}} className='mx-2'>
                <RiTwitterFill />
                </a>
                <a href="#" style= {{color: '#c6a16e'}} className='mx-2'>
                <RiGlobalLine />
                </a>
                </>
              </p>
            </div>
          </Col>
          <Col xs={12} md={7}>
          <div className='position-relative'>
            <Image src = './images/visit_bg.jpg.webp' fluid/>
            <div className='gold__box position-absolute d-inline-block'>
              <span className='text-white'>10% off</span>
              <br />
              <button className='btn bg-black text-white'>Get Offer</button>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
