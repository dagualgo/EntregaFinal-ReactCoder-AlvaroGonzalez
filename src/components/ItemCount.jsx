import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const[count, setCount] = useState(initial);

    const handleIncrememt = () => {
        if (count < stock){
            setCount(count+1)
        }
    };

    const handleDecrement = () => {
        if (count > 0){
            setCount(count - 1);
        }

    };

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrememt}>+</button>
            <button onClick={() => onAdd(count)}>Add to Cart</button>
   
        </div>
    );
};

export default ItemCount;