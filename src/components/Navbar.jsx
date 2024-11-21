import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo"; // Componente Logo
import "./NavBar.css"; // Estilos del NavBar

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
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
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


