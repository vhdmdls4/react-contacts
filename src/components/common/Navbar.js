import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar as RSNavbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

function Navbar() {
  const location = useLocation();

  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  return (
    <RSNavbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">
          Contact Manager
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" active={isLinkActive("/")}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/add" active={isLinkActive("/add")}>
              Add Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </RSNavbar>
  );
}

export default Navbar;
