import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Home} from "./components/Home";
import "./css/Header.css";
import AppNavbar from "./components/AppNavbar";
import CardPizza from "./components/CardPizza";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppNavbar></AppNavbar>
      <Home></Home>
      <CardPizza></CardPizza>
    </>
  );
}

export default App;
