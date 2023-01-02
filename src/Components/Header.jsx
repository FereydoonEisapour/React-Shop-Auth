import React from "react";
//import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-fluid d-flex justify-content-between px-2 py-2 ">
      <div className="d-flex align-items-center">
        <nav className="px-1 ">
          <Link
            className="text-decoration-none px-1 text-dark fw-bold  "
            to="/"
          >
            ReactShop
          </Link>
          {/* <Link
            className="text-decoration-none  px-1 text-dark fw-bold "
            to="/trade/btc"
          >
            
          </Link> */}
        </nav>
      </div>
      <div className="d-flex align-items-center px-1">
        <div className="d-flex">
          <div className="me-auto mb-2  my-2">
            <Link
              to="/cart"
              className="nav-item mx-1 text-decoration-none text-dark fw-bold"
            >
              Cart
            </Link>
          </div>
          <div className="me-auto mb-2  my-2">
            <Link
              to="/login"
              className="nav-item mx-1 text-decoration-none text-dark fw-bold"
              type="submit"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

//  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//             <Container>
//                 <Navbar.Brand href="#home" className="">
//                     <NavLink to='/'>
//                           React Shop
//                     </NavLink>

//                     </Navbar.Brand>
//                 {/* <Nav>
//                     <Link to="/add">Add</Link>
//                 </Nav> */}
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end ">
//                     <Nav className="">
//                         {/* <Nav.Link href="#features">Shop</Nav.Link> */}
//                         <NavDropdown title="Profile" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">
//                                 Dashboard
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                         </NavDropdown>
//                     </Nav>
//                     <Nav>

//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
