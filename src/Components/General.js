import React from 'react';
import {Container, Nav, NavLink } from 'react-bootstrap';

function General() {
    return (
        <>
        <Container>
            <ul className='list-group'>
                <li className='d-flex list-group-item'>Constitution Of India - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Bhartiye Nyaye Sanhita 2023 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Criminal Low (Amendment) Act, 2013 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Indian Panal Code, 1860 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Indian Evidence Act, 1872 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Code of Criminal Procedure, 1973 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
            </ul>
        </Container>
        </>
    );
}

export default General;