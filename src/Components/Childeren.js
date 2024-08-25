import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function Childeren() {
    return (
        <>
           <Container>
            <ul className='list-group'>
                <li className='d-flex list-group-item'>Hindu Adoption and Maintenance Act, 1956 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Protection of Children from Sexual Offences Rules, 2020 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Protection of Children from Sexual Offences Act, 2012  - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>THE JUVENILE JUSTICE (CARE AND PROTECTION OF CHILDREN) ACT, 2015 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Prohibition of Child Marriage Act, 2006 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Child Labour (Prohibition & Regulation) Act, 1986 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>Child Marriage Restraint Act, 1929  - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
                <li className='d-flex list-group-item'>The Immoral Traffic (Prevention) Act, 1956 - <Nav.Link as={NavLink} to="/" rel='noopener' style={{color:"red"}}>Know more</Nav.Link></li>
            </ul>
        </Container> 
        </>
    );
}

export default Childeren;