import {Container, Card, Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Profile() {
  const userEmail = "usuario@ejemplo.com";

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center py-5">
        <Card style={{width: "24rem"}} className="text-center shadow-sm">
          <Card.Body className="text-center">
            <Image
              src="https://i.pravatar.cc/150?img=65"
              roundedCircle
              width={120}
              height={120}
              className="mb-3"
            />
            <Card.Title>Mi Perfil</Card.Title>
            <Card.Text className="mb-4 text-muted">{userEmail}</Card.Text>
            <Button variant="dark" as={Link} to="/">
              Cerrar Sesión
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
