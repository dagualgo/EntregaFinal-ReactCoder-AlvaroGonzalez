import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    //console.log("ID del producto:", product.id);
    //console.log("ID recibido desde useParams:", product.id); // Verifica si el ID es el esperado
    //console.log("ID del producto desde Item.jsx:", product.id);

    

    return (
        
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Precio: ${product.price}</p>
          
            <Link to={`/item/${product.id}`} className="product-detail-button">
                Ver Detalle
            </Link>


            <Link to={`/debug/${product.id}`} className="product-debug-button">
        Debug
      </Link>


        </div>
    );
};

export default Item;
