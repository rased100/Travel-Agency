import { Button } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log('nav', user);
    return (
        <Navbar bg="" variant="dark" expand="lg" fixed="top" className="Navbar">
            <Container>
                <Navbar.Brand href="/home" className="header navlink">Travel Agency</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='d-flex justify-content-center' style={{ maxHeight: "100px" }} navbarScroll>
                        <NavLink className="navitem items navlink" to="/home">
                            Home
                        </NavLink>
                        {user?.email &&
                            <NavLink className="navitem items navlink" to="/dashboard">
                                Dashboard
                            </NavLink>
                        }

                        <h6 className="navitem items mx-2 navlink">{user?.displayName}</h6>
                        {user?.email ? (
                            <NavLink onClick={logout} className="navitem items navlink" to="/login">
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink className="navitem items navlink" to="/login">
                                Login
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;