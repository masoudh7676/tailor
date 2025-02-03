import React from 'react'
import './services&history.css'
import { Container, Card, Row, Col, Button, Image } from 'react-bootstrap';
import Navigation from './Nav'
import Main2 from './Main2';
import Footer from './Footer';

export default function Services() {
  return (
    <>
      <div className='services__container'>
      <div className=' position-relative d-flex justify-content-end overflow-hidden bg-white'>
      <Image src='./images/gallery.jpg.webp' className='image__custom object-fit-cover'/>
        <h2 className='text-capitalize position-absolute text-white top-50 fw-bold services__title'>services</h2>
      </div>
        <Main2/>
       <Footer/>
      </div>
    </>
  )
}
