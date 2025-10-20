import {Button, Col, Container, Image, Row} from "react-bootstrap";
import "../css/PizzaDetail.css";

//MODIFICAR EL CARD

export default function PizzaDetail({id, name, ingredients, img, price, desc}) {
  const CLP = (n) =>
    n.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    });

  return (
    <>
      <Container className="py-4">
        <Row className="g-4">
          <Col>
            <Image src={img} className="large-image" />
          </Col>
          <Col xs={12} md={4}>
            <div className="text-center align-items-end">
              <div>
                <span className="name-pizza text-capitalize">{name}</span>
                <br></br>
                <span className="desc-pizza">{desc}</span>
                <br></br>
              </div>
              <div className="p-5">
                <span>Ingredientes:</span>
                <ul className="ingredients-list">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>{CLP(price)}</span>
                <Button>Comprar</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
