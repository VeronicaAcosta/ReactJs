
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="notification">3</span>
    </div>
  );
};

export default CartWidget;
