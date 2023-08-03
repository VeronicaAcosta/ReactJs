import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg" className="nav_bar p-3" > 
      <Navbar.Brand href="#home" style={{ color: '#d87093' }}>VerinArte</Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <CartWidget />
          <Nav.Link href="#productos" style={{ color: '#d87093' }}>Productos</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default NavBar;
