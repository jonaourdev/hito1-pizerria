import {Button, Card} from "react-bootstrap";
import "../css/PizzaDetail.css";

//MODIFICAR EL CARD

export default function PizzaDetail({name, ingredients, img, price, desc}) {
  return (
    <>
      <Card className="h-100 shadow-sm">
        <div className="image-container">
          <Card.Img variant="top" src={img} alt={name} />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div>
              <span className="text-muted text-decoration-line-through">
                {ingredients}
              </span>
              <span className="fs-4 fw-bold text-danger ms-2">{price}</span>
            </div>
            <Button variant="danger" size="sm">
              Comprar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
