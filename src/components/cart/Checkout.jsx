import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, totalCost, clearCart } = useContext(CartContext);
  const [buyerInfo, setBuyerInfo] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo({ ...buyerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de confirmar la compra.");
      return;
    }

    console.log("Datos del Comprador:", buyerInfo);
    console.log("Productos del carrito:", cartItems);

    const order = {
      buyer: buyerInfo,
      items: cartItems,
      total: totalCost,
      date: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart(); // Vacío carrito después de comprar
      console.log("Orden creada con ID:", docRef.id);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyerInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyerInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={buyerInfo.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Confirmar Compra</button>
      </form>

      {orderId && (
        <p className="success-message">
          ¡Gracias por tu compra! Tu ID de orden es: <strong>{orderId}</strong>
        </p>
      )}
    </div>
  );
};

export default Checkout;
