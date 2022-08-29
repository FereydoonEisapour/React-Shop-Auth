import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" className="">React Shop</Navbar.Brand>
                <Nav>
                    <Link to="/add">Add</Link>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end ">
                    <Nav className="">
                        {/* <Nav.Link href="#features">Shop</Nav.Link> */}
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header