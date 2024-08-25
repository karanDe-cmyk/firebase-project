import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div>
            <section id='footer'>
                <Container className=''>
                    <Row className='footerbottom'>
                        <Col md={4} sm={12} className=''>
                            <div className='footerwidget mb-4'>
                                <h2>Local Society</h2><br />
                                <h2>Women Safety Wing</h2>
                            </div>
                            <div></div>
                            <ul className='footer-list'>
                                <li><span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>Adhyapak Nangloi, 110041</li>
                                <li><span><FontAwesomeIcon icon={faPhone} /></span>040-27852246</li>
                                <li><span><FontAwesomeIcon icon={faMobile} /></span>8287568224</li>
                                <li><span><FontAwesomeIcon icon={faWhatsapp} /></span>9716054923</li>
                            </ul>
                        </Col>
                        <Col md={4} sm={12} className=''>
                            <div className='footerwidget mb-4'>
                                <h2>Get Help</h2>
                            </div>
                            <ul className='link-list'>
                                <li><a href='#'>Get help by issue</a></li>
                                <li><a href='#'>Get help by location</a></li>
                                <li><a href='#'>Contact Us</a></li>
                            </ul>
                        </Col>
                        <Col md={4} sm={12} className=''>
                            <div className='footerwidget mb-4'>
                                <h2>Quick Link</h2>
                            </div>
                            <ul className='link-list'>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Get Involved</a></li>
                                <li><a href='#'>Careers</a></li>
                                <li><a href='#'>T-Safe</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Footer;