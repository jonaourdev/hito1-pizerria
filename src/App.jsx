import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import "./css/Header.css";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <>
      <AppNavbar></AppNavbar>
      <Home></Home>
    </>
  );
}

export default App;
