import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemDetails.css";

const ItemDetails = ({ product }) => {
  const navigate = useNavigate();

  if (!product) {
    return <p>Producto no encontrado en ItemDetail.</p>;
  }

  return (
    <div className="product-detail">
    <img src={product.image} alt={product.name} className="product-detail-image" />
    <h2 className="product-detail-title">{product.name}</h2>
    <p className="product-detail-description">{product.description}</p>
    <p className="product-detail-price">Precio: ${product.price}</p>
    <button onClick={() => navigate(-1)} className="product-detail-button">
        Volver
    </button>
</div>
  );
};

export default ItemDetails;
