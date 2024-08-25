import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Marital() {
    return (
        <>
            <Container>
            <ul className='list-group'>
                <li className='d-flex list-group-item'>The Dowry Prohibition Act, 1961 (28 of 1961) (Amended in 1986) - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Commission of Sati (Prevention) Act, 1987 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Protection of Women from Domestic Violence Act, 2005 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Hindu Adoption and Maintenance Act, 1956 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Foreign Marriage Act, 1969  - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Hindu Marriage Act, 1955  - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Muslim Women (Protection of Rights on Divorce) Act, 1986  - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Special Marriages Act, 1954  - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Indian Christian Marriage Act, 1872   - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
            </ul>
        </Container>
        </>
    );
}

export default Marital;