import { createContext, useState } from "react";

// Creo context
export const CartContext = createContext();

// Creo Provider del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Calcula la cantidad total de ítems
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Calcula el costo total
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const addItem = (item) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex >= 0) {
        const updatedCartItems = [...prev];
        const existingItem = updatedCartItems[existingItemIndex];
  
        // Verificar si se puede agregar más cantidad sin exceder el stock
        const totalQuantity = existingItem.quantity + item.quantity;
        if (totalQuantity > item.stock) {
          alert(`No puedes agregar más de ${item.stock} unidades de este producto.`);
          return prev; // No actualizamos el carrito si excede el stock
        }
  
        updatedCartItems[existingItemIndex].quantity = totalQuantity;
        return updatedCartItems;
      } else {
        // Si el producto no existe, asegurarse de que la cantidad inicial no exceda el stock
        if (item.quantity > item.stock) {
          alert(`No puedes agregar más de ${item.stock} unidades de este producto.`);
          return prev;
        }
        return [...prev, item];
      }
    });
  };
  

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id)); // Elimina un ítem por ID
  };

  const clearCart = () => {
    setCartItems([]); // Vacío carrito
  };

  const updateItemQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clearCart, totalQuantity, totalCost, updateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
