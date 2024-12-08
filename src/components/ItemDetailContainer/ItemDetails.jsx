import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../cart/ItemCount";
import "./ItemDetails.css";

const ItemDetails = ({ product }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  // Declarar el estado para quantity
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (count) => {
    setQuantity(count); // Actualizamos el estado local
    const itemToAdd = { ...product, quantity: count };
    addItem(itemToAdd); // Agregamos al carrito mediante el contexto
    console.log(`Añadido ${count} unidades al carrito.`);
  };

  if (!product) {
    return <p>Producto no encontrado en ItemDetail.</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <h2 className="product-detail-title">{product.name}</h2>
      <p className="product-detail-description">{product.description}</p>
      <p className="product-detail-price">Precio: ${product.price}</p>
      <p className="product-detail-price">Stock: {product.stock}</p>
      {/* Componente ItemCount con la función onAdd */}
      <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
      {quantity > 0 && <p>Has seleccionado {quantity} unidades. Agregado al carrito.</p>}
      <button onClick={() => navigate(-1)} className="product-detail-button">
        Volver
      </button>
    </div>
  );
};

export default ItemDetails;
