import {useState, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import PizzaDetail from "../components/PizzaDetail";
import {useParams} from "react-router-dom";

export default function Pizza() {
  const {id} = useParams();
  const [pizza, setPizza] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

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
