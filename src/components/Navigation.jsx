import { Container, Nav, Navbar } from "react-bootstrap";

import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {      

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">PRODUCTS!</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className='nav-link' to='/'>Home</Link> 
                    <Link className='nav-link' to='/about'>About</Link>     
                    <Link className='nav-link' to='/detalle'></Link>              
                </Nav>
                </Container>
            </Navbar>
            <br />        
        </>        
    );

 }

export default Navigation;

/*{ <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Detail</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link> }*/