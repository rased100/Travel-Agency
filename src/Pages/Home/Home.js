import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner/Banner';
import Navigation from '../Header/Navigation/Navigation';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            {/* <Register></Register> */}
            {/* <Login></Login> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;