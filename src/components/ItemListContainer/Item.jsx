import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Precio: ${product.precio}</p>
            <Link to={`/item/${product.id}`} className="product-detail-button">
                Ver Detalle
            </Link>
        </div>
    );
};

export default Item;
