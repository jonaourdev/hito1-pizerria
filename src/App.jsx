import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import "./css/Header.css";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar></AppNavbar>
        {/* <Home></Home> */}
        {/* <LoginPage></LoginPage> */}
        <RegisterPage></RegisterPage>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
