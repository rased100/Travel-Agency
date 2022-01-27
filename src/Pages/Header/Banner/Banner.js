import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel className="Carousel">

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 height"
                        src="https://i.ibb.co/hdpdzc8/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='Carousel-2'>
                        <h3 className='text-city'>Asia</h3>
                        <h6 className='text'> The largest part of the world, both in territory and in population</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 height"
                        src="https://i.ibb.co/0Xhh36P/banner2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='Carousel-2'>
                        <h2 className='text-city'>Reykjavik</h2>
                        <h5 className='text'> The capital and largest city as well as the community of Iceland</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 height"
                        src="https://i.ibb.co/C252gPM/banner3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='Carousel-2'>
                        <h3 className='text-city'>Arizona</h3>
                        <h6 className='text'> The 48th state, which became part of the United States. Located in the South-West of the country</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;