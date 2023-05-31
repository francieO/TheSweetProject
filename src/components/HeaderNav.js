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
              <NavDropdown.Item as={Link} to="/menu/customCookies">
                CUSTOM COOKIES
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/macarons">
                MACARONS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/brigadeiros">
                BRIGADEIROS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/cupcakes">
                CUPCAKES
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/cakecicles">
                CAKECICLES
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/cakepops">
                CAKEPOPS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/artesenalcookiejars">
                ARTESANAL COOKIE JARS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/menu/cakes">
                CUSTOM CAKES
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GALLERY" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/menu/sweet-gallery">
                SWEET GALLERY
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/cake-gallery">
                CAKE GALLERY
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/order">
              ORDER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
