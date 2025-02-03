import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap';
export default function HistoryC() {
    return (
        <>
            <Row className="justify-content-center mt-5 gap-sm-5 history__content">
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <div className='img__box'>
                        <Image src="./images/videobg.jpg.webp" className='object-fit-cover' alt="" fluid />
                    </div>
                </Col>
                <Col xs={12} md={5} className="d-flex justify-content-center">
                    <div className='text__box p-5'>
                        <span className='text-capitalize'>our history</span>
                        <p>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatat nulla pariatur. Excepteur sintxsdfas occaecat, cupidatat non proidente sunt in culpa qui officia deserunt, mollit anim id est laborum. Sedut des perspiciatis unde omnis iste.</p>
                        <div>
                            <Button className='about__btn border-0 p-2'>About Us</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
