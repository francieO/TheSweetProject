import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HeaderNav() {
  return (
    <Navbar bg="light">
      <Container>
        {/* <Navbar.Brand href="#home">The Sweet Project</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto headerNavLinks">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>

            <NavDropdown title="MENU" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cakes">
                CAKES
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/decorated-cookies">
                DECORATED COOKIES
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/macarons">
                MACARONS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brigadeiros">
                BRIGADEIROS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cupcakes">
                CUPCAKES
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cakecicles">
                CAKECICLES
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cakepops">
                CAKEPOPS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cookie-jars">
                ARTESANAL COOKIE JARS
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GALLERY" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sweet-gallery">
                SWEET GALLERY
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cake-gallery">
                CAKE GALLERY
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              ORDER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
