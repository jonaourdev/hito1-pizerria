import {useState} from "react";
import {Container, Row, Col, Form, Button, Alert} from "react-bootstrap";

export default function LoginPage() {
  // const para validar formularios
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Manejo de submits
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Todos los campos son obligatorios!");
      setSuccess(false);
      return;
    }

    if (!email.includes("@")) {
      setError("El email debe contener un dominio!");
      setSuccess(false);
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres!");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    console.log("Form listo!", {email, password});
  };

  return (
    <>
      <Container className="py-5" style={{maxWidth: "400px"}}>
        <Row className="justify-content-center">
          <Col>
            <h2 className="mb-4 text-center">Login</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Login exitoso!</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
