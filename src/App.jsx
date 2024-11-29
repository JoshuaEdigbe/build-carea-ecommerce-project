import "./App.scss";
import Register from "./Pages/Auth/Register/Register";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import Categories from "./Pages/Categories/Categories";
import Contact from "./Pages/Contact/Contact";
import Ads from "./Sections/ads/Ads";
import Footer from "./Sections/Footer/Footer";
import Layout from "./Sections/Layout";
import Nav from "./Sections/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Ads />
        <Nav />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
