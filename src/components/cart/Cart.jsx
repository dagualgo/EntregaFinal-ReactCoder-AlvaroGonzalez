import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../cart/ItemCount";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateItemQuantity, removeItem, clearCart, totalCost } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div>
        <div className="cart">
      <h2>Carrito</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <div className="cart-item-actions">
              <ItemCount
                stock={item.stock}
                initial={item.quantity}
                onUpdate={(newQuantity) =>
                  updateItemQuantity(item.id, newQuantity)
                }
              />
              <button className="cart-item-remove" onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
        </div>

        <div className="cart-actions">
          <h3>Total: ${totalCost}</h3>
          <div>
            <button className="cart-clear" onClick={clearCart}>Vaciar carrito</button>
            <button className="cart-checkout" onClick={() => navigate('/checkout')}>Finalizar Compra</button>
        </div>
        </div>

    </div>

    
  );
};

export default Cart;
