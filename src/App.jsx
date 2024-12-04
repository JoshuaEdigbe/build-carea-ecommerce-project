import "./App.scss";
import Search from "./components/Search/SearchModal";
import About from "./Pages/About/About";
import Categories from "./Pages/Categories/Categories";
import Contact from "./Pages/Contact/Contact";
import Ads from "./Sections/ads/Ads";
import Footer from "./Sections/Footer/Footer";
import Hero from "./Sections/hero/Hero";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
