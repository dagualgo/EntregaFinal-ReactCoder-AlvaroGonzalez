import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Quienes from "./pages/Quienes";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import DetalleProducto from "./pages/DetalleProducto";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/quienes" element={<Quienes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
