// import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

const TopNavbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" className='rounded rounded-3' variant="light">
                <Container>
                    <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><FaBeer></FaBeer></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="outline-secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopNavbar;