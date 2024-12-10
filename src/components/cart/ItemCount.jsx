import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, onUpdate }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
      if (onUpdate) {
        onUpdate(count + 1); // Notificamos al carrito
      }
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      if (onUpdate) {
        onUpdate(count - 1); // Notificamos al carrito
      }
    }
  };

  return (
    <div className="item-count-container">
      <button className="item-count-button" onClick={handleDecrement}>
        -
      </button>
      <span className="item-count-display">{count}</span>
      <button className="item-count-button" onClick={handleIncrement}>
        +
      </button>
      {onAdd && (
        <button className="item-count-button" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default ItemCount;
