import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./css/Header.css";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Pizza from "./pages/Pizza";
import {Route, Routes} from "react-router-dom";
import Notfound from "./components/NotFound";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar></AppNavbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/pizza/:id" element={<Pizza />}></Route>
          <Route path="/404" element={<Notfound />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
