import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Hook para manejar navegación
import products from "../data/getProducts";
import ItemCount from "../components/ItemCount"; // Componente de incremento/decremento del ejercicio no obligatorio
import "./DetalleProducto.css";

const DetalleProducto = () => {
  const { id } = useParams(); // Capturar el parámetro dinámico de la URL
  const navigate = useNavigate(); // Hook para el botón "Volver"
  const producto = products.find((p) => p.id === parseInt(id)); // Buscar el producto por ID

  const handleAddToCart = (quantity) => {
    console.log(`Se agregó ${quantity} unidad(es) de "${producto.name}" al carrito.`);
  };

  if (!producto) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div className="detalle-container">
      <h1 className="detalle-title">{producto.name}</h1>
      <p className="detalle-description">{producto.description}</p>
      <p className="detalle-price">Precio: ${producto.precio}</p>
      <p className="detalle-stock">Stock disponible: {producto.stock}</p>
      <img className="detalle-image" src={producto.image} alt={producto.name} />

  
      <ItemCount stock={producto.stock} initial={1} onAdd={handleAddToCart} />

      {/* Botón para volver a la página anterior */}
      <button className="detalle-button" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default DetalleProducto;
