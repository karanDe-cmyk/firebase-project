import React from 'react';
import {Container, Nav, NavLink } from 'react-bootstrap';

function Cyber(props) {
    return (
        <>
        <Container>
            <ul className='list-group'> 
                <li className='d-flex list-group-item'>The Indecent Representation of Women (Prohibition) Act, 1986 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Information Technology Act , 2000 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
            </ul>
        </Container>
        </>
    );
}

export default Cyber;