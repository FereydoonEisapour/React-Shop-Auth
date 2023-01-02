import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useAuthState } from '../Contexts/AuthContext';
import "./../Assets/Styles/Cart.css"
const Header = () => {
    const { user } = useAuthState()
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container >
                <Navbar.Brand className="col-md-6 ">
                    <Link to="/" className='text-decoration-none px-1 text-dark fw-bold '>  React Shop</Link>
                </Navbar.Brand>
                <div className=" d-flex align-items-center  ">
                    <Nav>
                        <Link to="/cart" className='text-decoration-none text-dark mx-2'>🛒</Link>
                    </Nav>
                    {user ?
                        <NavDropdown title="Profile" id="collasible-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1" >Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >Logout</NavDropdown.Item>
                        </NavDropdown>
                        : <Link to="/login" className='text-decoration-none text-dark'>Login</Link>}
                </div>
            </Container>
        </Navbar>
    )
}
export default Header