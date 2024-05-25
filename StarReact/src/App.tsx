import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/NavbarComponent/Navbar";
import HeroSection from "./Component/HeroSectionComponent/HeroSection";
import FiltersBar from "./Component/FiltersBarComponent/FiltersBarComponent";
import ProductList from "./Component/Product/ProductList";
import ProductDetail from "./Component/Product/ProductDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <FiltersBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
