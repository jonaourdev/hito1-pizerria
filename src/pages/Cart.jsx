import {useState} from "react";
import {pizzaCart} from "../js/pizzas";
import {Button, Container, Table, Image} from "react-bootstrap";

export default function Card() {
  //const para agregar cosas al carrito
  const [cart, setCart] = useState(pizzaCart);

  //funcion para setear pesos en CLP
  const CLP = (n) =>
    n.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    });

  //funcion para aumentar cantidad
  const incrementar = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? {...item, count: item.count + 1} : item
      )
    );
  };

  //funcion para decrementar cantidad
  const decrementar = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.count > 1
          ? {...item, count: item.count - 1}
          : item
      )
    );
  };

  //funcion para calcular total del carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <>
      <Container className="py-4">
        <h4>Detalles del pedido:</h4>
        <Table borderless responsive>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="align-middle">
                <td style={{width: "50px"}}>
                  <Image src={item.img} thumbnail width={50} />
                </td>
                <td>{item.name}</td>
                <td className="text-end">{CLP(item.price)}</td>
                <td className="text-center" style={{width: "130px"}}>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => decrementar(item.id)}
                  >
                    {" "}
                    -{" "}
                  </Button>
                  <span className="mx-2">{item.count}</span>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => incrementar(item.id)}
                  >
                    {" "}
                    +{" "}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <h5>Total: {CLP(total)}</h5>
          <Button variant="dark">Pagar</Button>
        </div>
      </Container>
    </>
  );
}
