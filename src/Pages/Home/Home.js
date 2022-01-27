import React from 'react';
import Blogs from '../Blogs/Blogs/Blogs';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner/Banner';
import Navigation from '../Header/Navigation/Navigation';
import NavigationBar from '../Header/Navigation/NavigationBar/NavigationBar';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <NavigationBar></NavigationBar> */}
            <Banner></Banner>
            <Blogs></Blogs>
            {/* <Register></Register> */}
            {/* <Login></Login> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;