import { Container, Card, Row, Col, } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './blog.css'
import blogCards from './BlogCards';
import posts from './post';
import images from './instagram';
import Footer from './Footer'
export default function Blog() {
    return (
        <>
            
            <div className='position-relative d-flex justify-content-end  img__containerH bg-white'>
                <img src="./images/about.jpg.webp" className='image__custom object-fit-cover' alt="" />
                <h2 className='text-capitalize position-absolute text-white top-50 fw-bold history__title'>Blog</h2>
            </div>
            <Container>
                <Row>
                    <Col md={6}>
                        {blogCards.map(card => (
                            <div key={card.id} className='overflow-hidden d-flex justify-content-center'>
                                <Card style={{ width: '40rem' }} className='my-5'>
                                    <Card.Img variant="top" className='object-fit-cover' src={card.img} />
                                    <div className='text-white position-relative rounded-2 p-3 date__box'>
                                        <span>{card.date}</span>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='fw-bold custom__title fs-4'>{card.title}</Card.Title>
                                        <Card.Text>
                                            {card.description}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        ))}

                    </Col>
                    <Col className='mt-5' md={5}>
                        <div>
                            <div className="input-group mb-3 search__box p-4 light__bg">
                                <input type="text" className="form-control shadow-none" placeholder="Search Keyword" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn text-white" type="button" id="button-addon2" style={{ backgroundColor: '#c6a16e' }}><IoIosSearch /></button>
                            </div>
                            <div className='category mt-5 light__bg p-5 fs-4'>
                                <p className='text-capitalize border-bottom p-3 text-center'>category</p>
                                <ul className='p-2'>
                                    <a href="#" className='text-capitalize text-decoration-none gray text-start'>
                                        <li className='border-bottom p-3'>Restaurant food (37)</li>
                                    </a>
                                    <a href="#" className='text-capitalize text-decoration-none gray text-start'>
                                        <li className='border-bottom p-3 '>
                                            travel news(10)
                                        </li>
                                    </a>
                                    <a href="#" className='text-capitalize text-decoration-none gray text-start'>
                                        <li className='border-bottom p-3 '>modern technology (46)</li>
                                    </a>
                                    <a href="#" className='text-capitalize text-decoration-none gray text-start'>
                                        <li className='border-bottom p-3'>product (32)</li>
                                    </a>
                                    <a href="#" className='text-capitalize text-decoration-none gray text-start'>
                                        <li className='border-bottom p-3'>inspiration (16)</li>
                                    </a>
                                    <a href="#" className='text-capitalize text-decoration-none gray text-start'>
                                        <li className='border-bottom p-3'>health care (24)</li>
                                    </a>
                                </ul>
                            </div>
                            <br />
                            <div className='light__bg mt-5'>
                                <p className='text-capitalize border-bottom p-3 text-center'>recent posts</p>
                                {posts.map(post => (
                                    <ul key={post.id}>
                                        <li className='d-flex gap-4'>
                                            <img src={post.img} className='object-fit-cover' alt="" />
                                            <div>
                                                <p>{post.text}</p>
                                                <span className='gray'>{post.date}</span>
                                            </div>
                                        </li>
                                    </ul>
                                ))}

                            </div>
                            <br />
                            <div className='mt-5 text-center light__bg p-2'>
                                <p className='text-capitalize border-bottom p-3'>tag clouds</p>
                                <div className=''>
                                    <button className='btn border mx-2 my-4 btn__custom'>project</button>
                                    <button className='btn border mx-2 my-4 btn__custom'>love</button>
                                    <button className='btn border mx-2 my-4 btn__custom'>technology</button>
                                    <button className='btn border mx-2 my-4 btn__custom'>travel</button>
                                    <button className='btn border mx-2 my-4 btn__custom'>Restaurant</button>
                                    <button className='btn border mx-2 my-4 btn__custom'>life style</button>
                                    <button className='btn border mx-2 my-4 btn__custom'>design</button>
                                    <button className='btn border mx-2 my-4 btn__custom'>illustration</button>
                                </div>
                            </div>
                            <br />
                            <div className='text-center tag__clods p-2 mt-5 light__bg'>
                                <p className='text-capitalize border-bottom p-3'>instagram feeds</p>
                                {images.map(image => (
                                    <div className='d-inline' key={image.id}>
                                        <img src={image.img} className='object-fit-cover mx-4 my-3' alt="" />
                                    </div>

                                ))}

                            </div>
                            <div className='text-center tag__clods p-2 mt-5 light__bg'>
                                <p className='text-capitalize border-bottom p-3'>newsletter</p>
                                <FloatingLabel controlId="floatingInput" label="Enter Email" style={{color: '#96989a'}}>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <button className='btn mt-5 bg-white news__btn w-100'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                    
            </Container>
            <Footer/>

        </>
    )
}
