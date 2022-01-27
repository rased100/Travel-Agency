import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            {/* <h1 style={{
                color: "green",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Travel Agency
            </h1> */}
            <Container>
                <Row>
                    <Column>
                        <Heading>Travel list</Heading>
                        <FooterLink href="#">Travel list Fullwidth</FooterLink>
                        <FooterLink href="#">Travel list Sidebar</FooterLink>
                        <FooterLink href="#">Travel list Left Sidebar</FooterLink>
                        <FooterLink href="#">Tour page with reply</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Page</Heading>
                        <FooterLink href="#">Stories Fullwidth</FooterLink>
                        <FooterLink href="#">Stories Single</FooterLink>
                        <FooterLink href="#">Stories Right Sidebar</FooterLink>
                        <FooterLink href="#">Stories Left Sidebar</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">United State</FooterLink>
                        <FooterLink href="#">India</FooterLink>
                        <FooterLink href="#">Bangladesh</FooterLink>
                        <FooterLink href="#">Australia</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
            <span className='d-flex justify-content-between mt-5'>
                <p className='text-white'>Privacy Policy</p>
                <p className='text-white'>Copyright © 2022</p>
            </span>

        </Box>
    );
};

export default Footer;
