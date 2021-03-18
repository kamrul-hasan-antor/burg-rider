import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="navigation container" expand="lg">
        <Navbar.Brand className="mr-auto ml-auto title" href="#home">
          Burg Riders
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <Nav.Link className="ml-2" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="ml-2" href="#Destination">
              Destination
            </Nav.Link>
            <Nav.Link className="ml-2" href="#Blog">
              Blog
            </Nav.Link>
            <Nav.Link className="ml-2" href="#Contact">
              Contact
            </Nav.Link>
            <Nav.Link className="ml-2" href="#Login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
