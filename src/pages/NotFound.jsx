import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Error 404</h1>
      <p>La página que buscas no existe.</p>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
};

export default NotFound;

