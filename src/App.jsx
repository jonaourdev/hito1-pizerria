import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import {Home} from "./components/Home";
import "./css/Header.css";
import AppNavbar from "./components/AppNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppNavbar></AppNavbar>
      <Home></Home>
    </>
  );
}

export default App;
