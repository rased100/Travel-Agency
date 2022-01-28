import { Box, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TravelExperience.css';

const TravelExperience = () => {
    const [blog, setBlog] = useState({});
    const { Id } = useParams();
    const { img, title, date, time, location, cost, rating } = blog;
    const rat = parseInt(rating);

    useEffect(() => {
        const url = `https://nameless-gorge-19964.herokuapp.com/blog/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);
    return (
        <div className='experience text-white'>
            <div className='container'>
                <h4 className='tx'>TravelExperience</h4>
                <p className='title'>{title}</p>
                <span className='d-flex justify-content-around'>
                    <h5 className=''>{date}</h5>
                    <h5 className=''>{time}</h5>
                </span>
                <img className='img-fluid image' src={img} alt="" />
                <span className='d-flex justify-content-around p-5'>
                    <h5 className='date'>{location}</h5>
                    <h5 className='date'>$ {cost}</h5>
                    <span>
                        <Typography component="legend">Rating</Typography>
                        <Rating className='bg-secondary rating' name="read-only" value={rat} readOnly />

                    </span>
                </span>
            </div>
        </div>
    );
};

export default TravelExperience;