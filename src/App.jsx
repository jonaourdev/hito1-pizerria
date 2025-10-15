import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home";
import "./css/Header.css";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
// import Cart from "./components/Cart";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar></AppNavbar>
        {/* <Home></Home> */}
        {/* <LoginPage></LoginPage> */}
        {/* <RegisterPage></RegisterPage> */}
        {/* <Cart></Cart> */}
        <Pizza></Pizza>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
