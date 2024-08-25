import React from 'react';
import '../Style.css'
import { Carousel, Container, Col, Row } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

function About() {
    return (
        <>
        <Header />
           <Container>
                <Row>
                <Col md={7} className="title_heading about p-4" >
                    <h2 className="title-head p-3" style={{fontSize:"60"}}>ABOUT WOMEN SAFETY WING</h2><br />
                    <p className="title p-3">The Women Safety Wing is a department of the Telangana State Police working to ensure the safety, dignity and empowerment of women in the state. The Wing has been designed to handle the investigation into crimes against women that specifically include prevention of trafficking, sexual offences, domestic violence, juvenile delinquency, NRI issues & cyber crimes Providing a safe environment to women & children while coming up with issue-specific solutions is a task that TSWSW addresses with all its earnestness.</p>
                    <br />
                    <p className='p-3'>The Women Safety Wing (WSW) was carved out from the Women Protection Cell, CID. It is a fully equipped and functional department working at independent premises. The WSW has its own cadre strength and a very specific mandate.</p>
                    
                </Col>
                <Col md={5} className="mt-5 mb-2">
                    <Carousel>
                        <Carousel.Item>
                        <img src="https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/02/0F2A4198-scaled.jpg" alt="" height={800} />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/02/0F2A4126.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="	https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/03/SAN_3051.jpg" alt="" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                </Row>
            </Container> 
            <Container className='about-section'>
                <Row className='d-flex justify-content-center'>
                    <Col md={6} sm={6} className='p-5 mission-column'>
                        <div>
                            <h2 className='section-head' style={{textAlign:"center"}}>Our Mission</h2>
                        </div>

                        <div className=''></div>
                        <div className='mission-text'>
                            <p className=''>Our objective is to support partners to become self-reliant and capable of leading their own development journeys. We make progress toward this by reducing the reach of conflict, providing necessary support, and reducing transactional crime and other safety Issues. We promote women prosperity through skill training and other necessary support systems.</p>
                        </div>
                    </Col>
                    
                    <Col md={6} sm={6} className='p-5'>
                        <h2 className='section-head' style={{textAlign:"center"}}>Our Vision</h2>
                        
                        <div className='vision-text'>
                            <p>Our vision is to establish a <em style={{fontWeight: "bold"}}>‘gender equal’</em> state where women are partners in progress. TSWSW seeks to create a level playing field promoting excellence devoid of gender discrimination working in tandem with partners locally and in national coalitions.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default About;