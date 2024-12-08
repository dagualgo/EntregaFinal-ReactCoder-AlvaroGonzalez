import { createContext, useState } from "react";

// Creo context
export const CartContext = createContext();

// Creo Provider del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Calcula la cantidad total de ítems
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addItem = (item) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex >= 0) {
        // Si el producto ya existe, actualizamos su cantidad
        const updatedCartItems = [...prev];
        updatedCartItems[existingItemIndex].quantity += item.quantity;
        return updatedCartItems;
      } else {
        // Si el producto no existe, lo agregamos
        return [...prev, item];
      }
    }); // <-- Aquí faltaba cerrar el paréntesis de setCartItems
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id)); // Elimina un ítem por ID
  };

  const clearCart = () => {
    setCartItems([]); // Vacío carrito
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
