// ejercicio no obligatorio

import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
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
      <button className="item-count-button" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
