import {Navbar, Container, Nav} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav>
            <Nav.Link href="#home">
              <Button variant="outline-light">Home</Button>
            </Nav.Link>
            <Nav.Link href="#profilee">
              <Button variant="outline-light">Profile</Button>
            </Nav.Link>
            <Nav.Link href="#logout">
              <Button variant="outline-light">Logout</Button>
            </Nav.Link>
            <Nav.Link href="#login">
              <Button variant="outline-light">Login</Button>
            </Nav.Link>
            <Nav.Link href="#register">
              <Button variant="outline-light">Register</Button>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#total">
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
