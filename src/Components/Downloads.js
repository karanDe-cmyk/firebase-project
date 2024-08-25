import React from "react";
import Header from "./Header";
import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap";
import { Download, download } from "./Sdata";
import{NavLink, Outlet} from 'react-router-dom'
import Footer from "./Footer";

function Downloads() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col md={8} sm={12} className="title_heading p-5">
            <h2 className="display-6">KNOWLOEDGE IS POWER</h2>
            <br />
            <span className="display-4">Laws relating to Women & Children</span>
            <br />
            <span>Safety</span>
            <br />
            <br />
            <p className="title text-left">
              Our Justice system provides various laws to safeguard women and
              children. It is important to create awareness of these laws and
              how they can help protect a mother, daughter, wife and an
              employee, from various crimes against women and children.
            </p>
          </Col>
          <Col md={4} sm={12} className="mt-5 mb-2">
            <Image src="/image/justice.jpg" alt="low" />
          </Col>
        </Row>
      </Container>
      <Container>
            <h2 className="display-6 text-center">
            Download Acts pertaining to Women Safety
            </h2>
            <ul className="download-btn d-flex justify-content-center">
                {Download.map((value) => (
                    <li><Nav.Link as={NavLink} to={value.link}><Button className={({isActive}) => isActive ?`btn btn-${value.color} active` : `btn btn-${value.color}`}>{value.title}</Button></Nav.Link></li>
                ))}
            </ul>
            <ul className="download-btn d-flex justify-content-center">
                {download.map((value) => (
                    <li>
                        <Nav.Link as={NavLink} to={value.link} ><Button className={`btn btn-${value.color}`}>{value.title}</Button></Nav.Link>
                    </li>  
                ))}
            </ul>
            <Outlet />
      </Container>
      <Container>
      </Container><br />
      <Footer/>
    </>
  );
}

export default Downloads;
