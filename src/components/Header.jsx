import imageBanner from "../img/Header.jpg";
import {Container} from "react-bootstrap";

export function Header() {
  return (
    <>
      <section
        className="hero-banner text-white"
        style={{backgroundImage: `url(${imageBanner})`}}
      >
        <div className="hero-overlay" />
        <Container className="hero-content text-center">
          <h1 className="display-5 fw-bold mb-2">¡Pizzeria Mamma Mia</h1>
          <p className="lead mb-3">
            ¡Tenemos la mejores pizzas que podrás encontrar!
          </p>
          <hr className="hero-divider" />
        </Container>
      </section>
    </>
  );
}
