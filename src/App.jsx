import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import "./css/Header.css";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar></AppNavbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
