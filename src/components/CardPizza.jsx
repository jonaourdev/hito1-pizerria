import {Container, Card, Row, ListGroup} from "react-bootstrap";

function CardPizza() {
  return (
    <>
      <section className="py-4">
        <Container>
          <div className="rounded-pill bg-warning-subtle border border-warning-subtle px-3 py-2 mb-4 d-inline-flex align-items-center">
            <span className="fw-semibold me-2">🍕 Nuestras Pizzas</span>
          </div>

          <Row className="g-4">
            <Card style={{width: "18rem"}}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CardPizza;
