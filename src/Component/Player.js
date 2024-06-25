import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Player = ({Player}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Player.imageURL}/>
      <Card.Body>
        <Card.Title>{Player.name} </Card.Title>
        <Card.Text>
        {Player.team}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player



