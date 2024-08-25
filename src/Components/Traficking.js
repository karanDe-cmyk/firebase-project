import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Traficking() {
    return (
        <>
            <Container>
                <ul className='list-group'>
                    <li className='d-flex list-group-item'>The Immoral Traffic (Prevention) Act, 1956  - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                    <li className='d-flex list-group-item'>Child Labour (Prohibition & Regulation) Act, 1986  - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                </ul>
            </Container>
        </>
    );
}

export default Traficking;