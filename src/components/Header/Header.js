import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="navigation " expand="lg">
        <Navbar.Brand className="mr-auto ml-auto" to="/">
          <h2 className="title">Burg Riders</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <Link className="ml-2 nav-link" to="/">
              Home
            </Link>
            <Link className="ml-2 nav-link" to="/destination">
              Destination
            </Link>
            <Link className="ml-2 nav-link" to="/">
              Blog
            </Link>
            <Link className="ml-2 nav-link" to="/">
              Contact
            </Link>
            <Link className="ml-2 nav-link" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
