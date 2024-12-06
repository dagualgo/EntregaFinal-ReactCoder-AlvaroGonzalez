import { FaShoppingCart } from "react-icons/fa";
import "./Navbar/navbar.css";

function CartWidget() {
  return (
    <div className="carrito">
      <a href="#">
        <FaShoppingCart size="60px" className="icon-cart" />
      </a>
      <span className="badge">5</span> {/* Numero hardcodeado */}
    </div>
  );
}

export default CartWidget;
