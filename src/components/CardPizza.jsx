import {Card, Button, ListGroup} from "react-bootstrap";

export default function CardPizza({name, price, ingredients, img}) {
  const CLP = (n) =>
    n.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    });
  return (
    <Card className="h-100 shadow-sm text-center">
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{objectFit: "cover", height: "220px"}}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-semibold">{name}</Card.Title>

        <div className="small text-muted mb-2">
          <strong>Ingredientes:</strong>
          <ListGroup variant="flush" className="mt-1">
            {ingredients.map((ing, i) => (
              <ListGroup.Item key={i} className="py-1">
                {ing}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="mt-auto">
          <div className="fw-bold fs-5 mb-3">Precio: {CLP(price)}</div>
          <div className="d-flex justify-content-between">
            <Button variant="outline-secondary" size="sm">
              Ver Más
            </Button>
            <Button variant="dark" size="sm">
              Añadir 🛒
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
