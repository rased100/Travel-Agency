import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Container, Grid, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const { blogs } = useAuth();
    return (
        <Container style={{
            margin: '50px auto'
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        blogs.map(blog => <Blog blog={blog}></Blog>)
                    }

                </Grid>
            </Box>
            <Pagination className="pagination" count={10} />
        </Container >
    );
};

export default Blogs;