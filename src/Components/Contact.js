import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import ContactForm from './ContactForm';
import Footer from './Footer';

function Contact() {
    return (
        <>
        <Header />
            <Container className='contact-container p-5'>
                <h2 className='head1 pb-3'>REACH OUT TO</h2>
                <h2 className='head2'>Women Safety Wing, National Women Council</h2>

                <Row>
                    <Col md={6} sm={12}>
                        <div className='map-container'>
                        <iframe className='pt-4'title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28023.728083238308!2d77.00677840367113!3d28.600796472787007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ab3f4b77efb%3A0x431234e829fb987f!2sKakrola%2C%20Delhi!5e0!3m2!1sen!2sin!4v1724247510138!5m2!1sen!2sin" width={700} height={350} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className='address-container pt-4 pl-5'>
                        <h2 className='head3'>Women Safety Wing Headquarter</h2>
                        <div className='heading-container'>
                            <ul className='heading-content d-flex'>
                                <li className='d-flex'>
                                <span><i className="fa-solid fa-map-location-dot pr-3"></i></span>
                                <span>Women Safety Wing<br />New Delhi Police, Delhi<br />Delhi,110041</span>
                                </li>
                                <li className='d-flex mt-3'>
                                <span><i className="fa-brands fa-whatsapp-square pr-4"></i></span>
                                <span>8287568224</span>
                                </li>
                                <li className='d-flex mt-3'>
                                <span><i className="fa-solid fa-square-phone pr-4"></i></span>
                                <span>011 7568224</span>
                                </li>
                                <li className='d-flex mt-3'>
                                <span><i class="fa-solid fa-envelope pr-4"></i></span>
                                <span>kk899168@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;