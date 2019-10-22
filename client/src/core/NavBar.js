import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem} from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import ArtworkSearchForm from '../artwork/ArtworkSearchForm'

const NavBar = withRouter(({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">Knack</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto col-sm-4" navbar>
            <NavItem className="col-sm-12">
              <ArtworkSearchForm />
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <Link to="/discovery" className="nav-link">Discovery</Link>
            </NavItem>
            <NavItem>
              <Link to="/login" className="nav-link">Login</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
})

export default NavBar;