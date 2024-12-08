import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cart/CartWidget";
import Logo from "../Logo"; // Componente Logo
import "./NavBar.css"; // Estilos del NavBar
import ConnectionIndicator from "./ConnectionIndicator";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <Logo />
      
      </Link>

      {/* Menú */}
      <ul className="nav-menu">
        <li>
          <ConnectionIndicator />
        </li>
        <li>
          <Link to="/home">Inicio</Link>
        </li>
        <li>
        <Link to="/">Productos</Link>
        </li>
        <li>
          <Link to="/quienes">Quiénes Somos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>

      {/* CartWidget */}
      <CartWidget />
    
    </nav>
  );
};

export default NavBar;


