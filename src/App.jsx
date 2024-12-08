import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetails from "./components/ItemDetailContainer/ItemDetails";
import Cart from "./components/cart/Cart";
import Home from "./pages/Home";
import Quienes from "./pages/Quienes";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import DebugDataView from "./components/ItemDetailContainer/DebugDataView";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/quienes" element={<Quienes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/debug/:id" element={<DebugDataView />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
