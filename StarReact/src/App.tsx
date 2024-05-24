import React from "react";
import Navbar from "./Component/NavbarComponent/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import ProductListPage from "./page/ProductListPage/ProductListPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductListPage />
    </>
  );
}

export default App;
