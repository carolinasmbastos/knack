import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap';
import { Link, withRouter } from "react-router-dom";

const NavBar = withRouter(({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">Knack</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link to="/discovery" className="nav-link">Discovery</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
})

export default NavBar;