import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HeaderNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">The Sweet Project</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME</Nav.Link>

            <NavDropdown title="MENU" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CAKES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                DECORATED COOKIES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MACARONS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                BRIGADEIROS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">CUPCAKES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">CAKECICLES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">CAKEPOPS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                ARTESANAL COOKIE JARS
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="GALLERY" id="basic-nav-dropdown">
              {" "}
              <NavDropdown.Item href="#action/3.1">
                SWEET GALLERY
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                CAKE GALLERY
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
