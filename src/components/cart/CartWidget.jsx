import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="carrito">
      <FaShoppingCart size="60px" className="icon-cart" />
      <span className="badge">{totalQuantity || 0}</span> {/* Siempre muestra el 0 si no hay productos */}
      
    </Link>
  );
};

export default CartWidget;

