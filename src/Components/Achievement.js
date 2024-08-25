import React from 'react';
import Header from './Header';
import { Carousel, Container, Col, Row } from 'react-bootstrap';
import Footer from './Footer'

function Achievement() {
    return (
        <>
           <Header />
           <Container>
                <Row>
                <Col md={7} className="title_heading about p-4" >
                    <h2 className="title-head p-3" style={{fontSize:"60"}}>Our Achievements</h2><br />
                    <p className="title p-3">Over years of our existence, the Women Safety Wing, Telangana Police has constantly thrived towards making Telangana a safer place for women and children. In this journey, the Women Safety Wing has bagged many accolades and achievements. We share some of the key highlights here.</p>
                    
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
            {/* <hr  /> */}
            <Container className='elementor-container d-flex justify-content-between'>
                <div className="">
                    <div className='elementor-element'>
                    <div className='image-container'>
                    <div class="box box--top"></div>
                        <img src="https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/01/ach4-300x200.jpg" width={350} alt="" />
                        <p className='pl-2'>First of it's kind Web Portal on Human Trafficking 'Dhruva' brought out by Telangana State Women Safety Wing in collaboration with Taruni NGO and UK in India.</p>
                    </div>
                    </div>
                </div>
                <div className="">
                    <div className='elementor-element'>
                    <div className='image-container'>
                    <div class="box box--top1"></div>
                        <img src="https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/01/ach5-300x159.jpg" width={350} alt="" />
                        <p className='pl-2'>Parliamentary Committee on Empowerment of Women headed by Dr. Heena Gavit visited the TS WSW as a part of the Study Tour to Hyderabad and Visakhapatnam. Smt. Swati Lakra IPS, ADGP briefed the Members about the initiatives and programmes taken by the WSW for the protection of Women.</p>
                    </div>
                    </div>
                </div>
                <div className="">
                    <div className='elementor-element'>
                    <div className='image-container'>
                    <div class="box box--top2"></div>
                        <img src="https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/01/ach6-300x199.jpg" width={350} alt="" />
                        <p className='pl-2'>Smt. Swati Lakra IPS, ADGP WSW bagged the President's Police Medal for distinguished service on the Independence Day 2021.</p>
                    </div>
                    </div>
                </div>
            </Container>
            <Container className='elementor-container d-flex justify-content-between mt-4'>
                <div className="">
                    <div className='elementor-element'>
                    <div className='image-container'>
                    <div class="box box--top"></div>
                        <img src="https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/01/ach7-300x200.jpg" width={350} alt="" />
                        <p className='pl-2'>Smt. Sumathi Badugula IPS, DIG Women Safety Wing was awarded as the "Best Covid Warrior Women Officer" for her contribution towards serving the people during the tumultuous times without fear of life.</p>
                    </div>
                    </div>
                </div>
                <div className="">
                    <div className='elementor-element'>
                    <div className='image-container'>
                    <div class="box box--top1"></div>
                        <img src="	https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/01/ach8-300x196.jpg" width={350} alt="" />
                        <p className='pl-2'>5th BHAROSA Centre in the State of Telangana was inaugurated today by Sri Jagadish, Minister for Energy, Sri Mahender Reddy IPS, DGP and Smt. Swathi Lakra IPS, ADGP WSW at Nalgonda. The Centre is Sponsored by SLN Terminus and ARC Groups.</p>
                    </div>
                    </div>
                </div>
                <div className="">
                    <div className='elementor-element'>
                    <div className='image-container'>
                    <div class="box box--top2"></div>
                        <img src="	https://womensafetywing.telangana.gov.in/wp-content/uploads/2022/03/SAN_3051.jpg" width={350} alt="" />
                        <p className='pl-2'>During Operation Smile VII in Telangana, Total 3178 children rescued of them 805 are from other states, 717 Street child, 147 Brick workers, 630 Bonded labour & 116 Child from begging were rescued. Total 232 cases registered under Child Labor. 15 missing (UI) cases traced.</p>
                    </div>
                    </div>
                </div>
            </Container>
            <Container>
                <h2 className='social-head pt-4 text-center d-flex mt-4'>Follow Us On Social Media<span className='underline'></span>
                </h2>
                <div className='social-content'>
                    <ul className='social-icon d-flex'>
                        <li><a href='/'><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href='/'><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href='/'><i class="fa-brands fa-whatsapp"></i></a></li>
                        <li><a href='/'><i class="fa-brands fa-twitter"></i></a></li>
                    </ul>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Achievement;