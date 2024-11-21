import React from "react";
import "./Quienes.css";
import eMostradorMain from "/img/e-mostrador-a.webp";
import eMostradorLogo from "/img/logo.webp";

const Quienes = () => {
  return (
    <div className="quienes-container">
      <div className="quienes-content">
        <div className="quienes-text">
          <h1 className="quienes-title">Nuestra Historia</h1>
          <p className="quienes-description">
            Bienvenido a <strong>E-MOSTRADOR</strong>. Este proyecto nació de una combinación de nostalgia y modernidad.
            Inspirado en los antiguos mostradores, donde cada cliente era atendido con calidez y dedicación,
            decidimos trasladar esa esencia a la era digital. Aquí no solo encontrarás productos,
            sino una experiencia que busca rescatar ese toque humano.
          </p>
          <p className="quienes-description">
            El nombre "<strong>E-MOSTRADOR</strong>" surgió como una ironía mientras aprendíamos sobre el mundo del e-commerce.
            En lugar de simplemente vender, queríamos crear un espacio que reflejara
            la atención personalizada de antaño, pero con las comodidades de hoy.
          </p>
        </div>
        <div className="quienes-images">
          <img className="quienes-main-image" src={eMostradorMain} alt="E-MOSTRADOR Principal" />
          <img className="quienes-logo-image" src={eMostradorLogo} alt="E-MOSTRADOR Logo" />
        </div>
      </div>
    </div>
  );
};

export default Quienes;
