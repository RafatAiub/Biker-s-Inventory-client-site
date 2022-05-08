import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../images/banner/banner1.jpg'
import banner2 from '../images/banner/banner2.jpg'
import banner3 from '../images/banner/banner3.jpg'
import banner0 from '../images/banner/banner0.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block container-fluid"
                    src={banner0}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block container-fluid"
                    src={banner1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-block  container-fluid"
                    src={banner2}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-block container-fluid"
                    src={banner3}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;