import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HeaderNav() {
  return (
    <Navbar bg="light">
      <Container className="navBarContainer">
        {/* <Navbar.Brand href="#home">The Sweet Project</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto headerNavLinks">
            <NavDropdown title="MENU" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/menu/customCookies">
                Custom Cookies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/macarons">
                Macarons
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/brigadeiros">
                Brigadeiros
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/cupcakes">
                Cupcakes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/cakecicles">
                Cakecicles
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/cakepops">
                Cakepops
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/artesenalCookieJars">
                Artesenal Cookie Jars
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/menu/cakes">
                Custom Cakes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GALLERY" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/menu/sweet-gallery">
                Sweet Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/cake-gallery">
                Cake Gallery
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
