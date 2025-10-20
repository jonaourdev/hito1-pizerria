import {Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <Container className="text-center py-5">
      <h1 className="display-3 text-danger">404</h1>
      <p className="lead">Página no encontrada</p>
      <p>Lo sentimos, la ruta que buscaste no existe o fue movida.</p>
      <Button as={Link} to="/" variant="dark">
        Volver al inicio
      </Button>
    </Container>
  );
}
