import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Sdata } from "./Sdata";
import Footer from "./Footer";
import Header from "./Header";

function Dashboard() {
  return (
    <>
    <Header />
      <Container fluid>
        <Row>
          <Col md={7} className="title_heading p-4" >
            <h2 className="display-5">Welcome To</h2>
            <span className="display-4">Local Society Women Safety Wing</span>
            <br />
            <p className="display-2">Standing alongside every woman and child to empower and encourage</p>
            <div className="">
              <button type="button" class="btn btn-danger"><span>EMERGENCY - DIAL 100</span></button>
              <button type="button" class="btn btn-danger child_btn"><span>CHILD HELPLINE - 1098</span></button>
              <button type="button" class="btn d-flex btn-danger child_btn"><img src="image/whatsapp.png" width={28} alt="whatsapp" /><span >8287568228</span></button>
            </div>
          </Col>
          <Col md={5} className="mt-5 mb-2">
            <Carousel>
                <Carousel.Item>
                  <img src="https://womensafetywing.telangana.gov.in/wp-content/uploads/2024/07/safe_migration-1024x683.jpg" alt="" height={800} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="image/Dashboard/Help_by_issue.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="image/Dashboard/Help_by_issue.jpg" alt="" />
                </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {Sdata.map((value, index) => (
          <Col xs={12} sm={12} md={4} lg={4} className=" d-flex justify-content-around mb-4" key={index}>
            <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={value.src} alt="Avatar" width={300} height={300} />
                <h2 className="mt-2 mb-4">{value.head}</h2>
              </div>
              <div class="flip-card-back"> 
                <p>{value.para}</p> 
                <button>Know More</button>
              </div>
            </div>
          </div>
          </Col>
          ) )}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
