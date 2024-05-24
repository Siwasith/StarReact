import React from "react";
import Navbar from "./Component/NavbarComponent/Navbar";
import HeroSection from "./Component/HeroSectionComponent/HeroSection";
import FiltersBar from "./Component/FiltersBarComponent/FiltersBarComponent"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FiltersBar />
    </>
  );
}

export default App;
