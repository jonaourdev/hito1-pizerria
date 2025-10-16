import {useState, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import PizzaDetail from "./PizzaDetail";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);

  const url = "http://localhost:5000/api/pizzas/p001";
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Container className="py-4">
        <Row className="g-4">
          <Col>
            <PizzaDetail
              name={pizza.name}
              desc={pizza.desc}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
