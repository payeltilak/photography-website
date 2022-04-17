import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{price}</p>
                    <p>{description}</p>
                    <Button variant="primary">Check me</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;