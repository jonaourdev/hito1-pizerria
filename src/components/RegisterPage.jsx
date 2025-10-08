import {useState} from "react";
import {Container, Row, Col, Form, Button, Alert} from "react-bootstrap";

export default function Register() {
  //const para manejar estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Función de manejo de submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      setSuccess(false);
      return;
    }

    if (!email.includes("@")) {
      setError("El email debe contener '@'.");
      setSuccess(false);
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setSuccess(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    console.log("Form register listo!", {email, password});
  };

  return (
    <Container className="py-5" style={{maxWidth: "400px"}}>
      <Row className="justify-content-center">
        <Col>
          <h2 className="mb-4 text-center">Registro</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Registro exitoso!</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
