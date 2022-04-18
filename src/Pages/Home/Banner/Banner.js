import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src="https://i.ibb.co/mtWLbTw/First-photo.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src="https://i.ibb.co/2vVgNhX/Photo2.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src="https://i.ibb.co/xHy1R52/Photo1.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;