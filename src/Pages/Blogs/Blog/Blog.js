import { Button, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const { img, title, info, cost, _id } = props.blog;
    const url = `/blog/${_id}`;
    console.log('url', url)
    return (
        <Grid className='' item xs={2} sm={4} md={4} >
            <CardMedia
                component="img"
                style={{ width: '100%', margin: 'auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {engine}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    {info}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {mileage}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    {cost}
                </Typography>
            </CardContent>
            {/* <Link href={url} style={{ textDecoration: 'none' }}>Details</Link> */}
            {/* <Link href='/home'>click</Link> */}
            <Link href={url} style={{ textDecoration: 'none' }}><Button variant="contained">Details</Button></Link>
            {/* <Link to="#" style={{ textDecoration: 'none' }}><Button variant="contained">Details</Button></Link> */}
        </Grid>
    );
};

export default Blog;