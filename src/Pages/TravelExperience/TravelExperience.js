import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TravelExperience = () => {
    const [blog, setBlog] = useState({});
    const { Id } = useParams();
    const { img, title, info, description, category, cost, sl } = blog;
    console.log('img', img)

    useEffect(() => {
        // const url = `travel.json/${Id}`;
        // const url = `travel.json/blog/${Id}`;
        const url = `http://localhost:5000/blog/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Typography className="bg-primary text-white p-3" style={{ margin: '0 0 20px 0' }} variant="h3" component="div">
                Place Order and Product Details
            </Typography>

            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <Box>
                        <CardMedia
                            component="img"
                            style={{ width: '50%', margin: 'auto' }}
                            image={blog.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {blog.title}
                            </Typography>
                            <Typography style={{ width: '50%', margin: 'auto' }} variant="body2" color="text.secondary">
                                {blog.info}
                            </Typography>
                            <Typography style={{ width: '50%', margin: 'auto' }} variant="body2" color="text.secondary">
                                {blog.description}
                            </Typography>
                            <Typography style={{ width: '50%', margin: 'auto' }} variant="body2" color="text.secondary">
                                {blog.category}
                            </Typography>
                            <Typography variant="p" component="div">
                                Price: ${blog.cost}
                            </Typography>
                        </CardContent>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TravelExperience;