import Header from "../components/Header";
import {Container, Row, Col} from "react-bootstrap";
import CardPizza from "../components/CardPizza";
import {useEffect, useState} from "react";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  const url = "http://localhost:5000/api/pizzas";
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Header></Header>
        <Container className="py-4">
          <Row className="g-4">
            {pizzas.map((pizza) => (
              <Col xs={12} md={6} lg={4}>
                <CardPizza
                  id={pizza.id}
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
