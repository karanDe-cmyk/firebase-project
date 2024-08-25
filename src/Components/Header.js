import React from 'react';
import '../Style.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
       <>
        <div className="d-flex justify-content-between ">
            <div className="logo-container">
                <div className="">
                <img src="image/logo.png" alt="logo" width={130} height={142} />
                </div>
            </div>
            <div className="logo-container1 mt-3">
                <h1 className='text-center display-4'>राष्ट्रीय महिला परिषद</h1><br />
                <h1 className='text-center display-5'>National Women Council</h1>
            </div>
            <div className="logo-container">
                <div className="">
                <img src="image/beti_logo.png" alt="beti_logo" width={130} height={142} />
                </div>
            </div>
        </div>
        <Navbar expand="lg" bg="light" className='mt-3' variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                    <NavDropdown title={<> <Nav.Link as={NavLink} to="/about">About Us<FontAwesomeIcon className="icon" icon={faPlus} /></Nav.Link>
                    </>} id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/who-we-are">WHO WE ARE</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/achievement">OUR ACHIEVEMENTS</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/download">Downloads And Lows</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                </Nav>
                <NavDropdown title="SOS" id="basic-nav-dropdown" className="ml-3 mr-3 btn btn-danger">
                    <NavDropdown.Item as={NavLink} to="/signup">Sign Up</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/signin">Sign In</NavDropdown.Item>
                </NavDropdown>
                <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success" className='ml-3' type="submit">Search</Button>
                </Form>
            {/* </Navbar.Collapse> */}
        </Navbar>
       </>
    );
}

export default Header;