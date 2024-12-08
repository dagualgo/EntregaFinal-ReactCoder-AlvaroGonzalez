import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../cart/ItemCount";
import "./ItemDetails.css";


const ItemDetails = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = React.useState(0);


  const handleAddToCart = (count) => {
    setQuantity(count);
    console.log(`Añadido ${count} unidades al carrito.`);
    // Aquí podrías integrar lógica para agregar al carrito
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
    <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
      {quantity > 0 && <p>Has seleccionado {quantity} unidades.</p>}
    <button onClick={() => navigate(-1)} className="product-detail-button">
        Volver
    </button>
</div>
  );
};

export default ItemDetails;
