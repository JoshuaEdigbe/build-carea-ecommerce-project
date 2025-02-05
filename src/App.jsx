import "./App.scss";
import Register from "./Pages/Auth/Register/Register";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import Categories from "./Pages/Categories/Categories";
import Contact from "./Pages/Contact/Contact";
import Ads from "./Pages/LandingPage/Ads/Ads";
import Footer from "./Pages/LandingPage/Footer/Footer";
import Layout from "./Pages/LandingPage/Layout";
import Navigation from "./Pages/LandingPage/Navigation/Navigation";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Ads />                
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/product" element={<ProductDetail />} /> */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
