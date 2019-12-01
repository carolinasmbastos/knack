import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import ArtworkSearchForm from "../artwork/ArtworkSearchForm";

const NavBar = withRouter(({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (window.innerWidth < 768) setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">
          <img
            src="/img/assets/logo.svg"
            alt="Knack Logo"
            className="logoImg"
          />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto col-sm-6" navbar>
            <NavItem className="col-sm-12">
              <ArtworkSearchForm />
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <Link
                to="/discovery"
                className="nav-link knack-btn knack-btn-light"
                onClick={toggle}
              >
                Discovery
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/explore"
                className="nav-link knack-btn knack-btn-light"
                onClick={toggle}
              >
                Explore
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/monthlyArt"
                className="nav-link knack-btn knack-btn-light"
                onClick={toggle}
              >
                Monthly Art
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
});

export default NavBar;
