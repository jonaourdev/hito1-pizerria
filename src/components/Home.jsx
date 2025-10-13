import Header from "./Header";
import {Container, Row, Col} from "react-bootstrap";
import CardPizza from "../components/CardPizza";
import {pizzas} from "../js/pizzas";

export default function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <Container className="py-4">
          <Row className="g-4">
            {pizzas.map((pizza) => (
              <Col xs={12} md={6} lg={4}>
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
