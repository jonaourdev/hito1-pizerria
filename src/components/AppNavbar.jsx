import {Navbar, Container, Nav} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/">
              <Button variant="outline-light">Home</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              <Button variant="outline-light">Profile</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/404">
              <Button variant="outline-light">Logout</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              <Button variant="outline-light">Login</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              <Button variant="outline-light">Register</Button>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/cart">
              <Button variant="outline-primary">
                <i className="bi bi-cart-fill"></i> Total $ 0
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
