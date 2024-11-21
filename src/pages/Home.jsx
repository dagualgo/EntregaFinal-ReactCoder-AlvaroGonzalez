import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenidos a</h1>
      <img
        className="home-image"
        src="/img/e-mostrador-a.webp"
        alt="Mostrador Antiguo"
      />
    </div>
  );
};

export default Home;
