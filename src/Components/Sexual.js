import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Sexual() {
    return (
        <>
          <Container>
            <ul className='list-group'>
                <li className='d-flex list-group-item'>The Indecent Representation of Women (Prohibition) Act, 1986 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Sexual Harassment of Women at Workplace (PREVENTION, PROHIBITION and REDRESSAL) Act, 2013 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Code of Criminal Procedure, 1973 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Indian Panal Code, 1860 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
            </ul>
        </Container>  
        </>
    );
}

export default Sexual;