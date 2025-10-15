import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "../css/PizzaDetail.css";

//MODIFICAR EL CARD

export default function PizzaDetail({ name, ingredients, img, price, desc }) {
  const CLP = (n) =>
    n.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    });

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Image src={img} className="large-image" />
          </Col>
          <Col xs={12} md={4}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              molestiae fuga omnis animi laboriosam est?
            </span>
          </Col>
        </Row>
      </Container>

      {/* <Card className="h-auto w-auto shadow-sm">
        <div className="d-flex flex-row">
          <div className="image-container">
            <Card.Img variant="top" src={img} alt={name} />
          </div>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <div className="d-flex flex-column align-items-center mt-auto">
              <div className="d-flex flex-column align-items-center mt-auto">
                <span className="text-muted text-decoration-line-through">
                  {ingredients}
                </span>
                <span className="fs-4 fw-bold text-danger ms-2">{CLP(price)}</span>
              </div>
              <Button variant="danger" size="sm">
                Comprar
              </Button>
            </div>
          </Card.Body>
        </div>
      </Card> */}
    </>
  );
}
