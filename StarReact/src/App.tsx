import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/NavbarComponent/Navbar";
import HeroSection from "./Component/HeroSectionComponent/HeroSection";
import ProductList from "./Component/Product/ProductList";
import ProductDetail from "./Component/Product/ProductDetail";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
        <div>
          <Navbar />
          <HeroSection />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/:id" element={<ProductDetail />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
