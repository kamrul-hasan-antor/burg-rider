import React, { useContext } from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <Navbar className="navigation " expand="lg">
        <Navbar.Brand className="mr-auto ml-auto" to="/">
          <Link to="/" className="title nav-link">
            Burg Riders
          </Link>
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
              {loggedInUser.name ? loggedInUser.name : "Login"}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
