import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import products from "../data/getProducts";
import "./Productos.css";

const Productos = () => {
  const [tipo, setTipo] = useState(""); // Mostrar todos inicialmente
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosFiltrados = tipo
      ? products.filter((producto) => producto.category === tipo)
      : products; // Mostrar todos si `tipo` está vacío
    setProductos(productosFiltrados);
  }, [tipo]);

  return (
    <div className="productos-container">
      <h1 className="productos-title">
        Productos para {tipo === "men" ? "Hombres" : tipo === "women" ? "Mujeres" : "Todos"}
      </h1>
      <div className="productos-buttons">
        <button onClick={() => setTipo("")}>Todos</button>
        <button onClick={() => setTipo("men")}>Hombres</button>
        <button onClick={() => setTipo("women")}>Mujeres</button>
      </div>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div className="product-card" key={producto.id}>
            <img src={producto.image} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p>{producto.description}</p>
            <p className="product-price">Precio: ${producto.precio}</p>
            {/* Botón para ver detalles */}
            <Link to={`/item/${producto.id}`} className="product-detail-button">
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
