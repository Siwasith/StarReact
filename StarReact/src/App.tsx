import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/NavbarComponent/Navbar";
import ProductList from "./Component/Product/ProductList";
import ProductDetail from "./Component/Product/ProductDetail";

function App() {
  return (
    <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/:id" element={<ProductDetail />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
