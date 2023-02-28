import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function LoginCarousel() {
return (
    <Carousel>
        <Carousel.Item>
        <img
            style={{height:" 749px",
            borderRadius: "16px",
            objectFit: "cover"}}
            className="d-block w-100"
            src="/Rectangle 5.jpg"
            alt="First slide"
        />
        <Carousel.Caption/>
        </Carousel.Item>
        <Carousel.Item>
        <img
            style={{height:" 749px",
                borderRadius: "16px",
                objectFit: "cover"}}
            className="d-block w-100"
            src="/banner-00.jpg"
            alt="Second slide"
        />

        <Carousel.Caption/> 
        </Carousel.Item>
        <Carousel.Item>
        <img
            style={{height:" 749px",
            borderRadius: "16px",
            objectFit: "cover"}}
            className="d-block w-100"
            src="/banner-2.jpeg"
            alt="Third slide"
        />

        <Carousel.Caption/>
        </Carousel.Item>
        {/* <Carousel.Item>
        <img
            style={{height:" 749px",
            borderRadius: "16px",
            objectFit: "cover"}}
            className="d-block w-100"
            src="/banner-3.jpeg"
            alt="Third slide"
        />

        <Carousel.Caption/>
        </Carousel.Item> */}
    </Carousel>
);
}

export default LoginCarousel;