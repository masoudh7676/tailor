import React, {useState} from 'react'
import { Container, Card } from 'react-bootstrap';
import cardsData from './Cards';

export default function Main2() {
    const [cards, setCards] = useState(cardsData);
  return (
    <Container>
    <div className='text__container text-text-capitalize text-center w-100'>
    <span>what we offer</span>
    <p>What we offer of Clients</p>
  </div>
  <div className='d-flex align-items-center justify-content-center gap-5 mt-5 overflow-hidden flex-wrap'>
    {cards.map(cards => (
      <Card key={cards.id} style={{ width: '18rem', backgroundColor: 'transparent' }} className='border-0'>
        <Card.Img variant="top" src={cards.img} />
        <Card.Body>
          <Card.Title className='text-white'>{cards.title}</Card.Title>
          <Card.Text>
            {cards.description}
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
  </div>

  </Container>
  )
}
