import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import Blogs from '../Blogs/Blogs/Blogs';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner/Banner';
import Navigation from '../Header/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Blogs></Blogs>
            {/* <AddBlog></AddBlog> */}
            {/* <Dashboard></Dashboard> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;