import React from 'react';
import './Contacto.css'; 

function Contacto() {
  return (
    <div className="contacto-container">
      <h1 className="contacto-title">Contacto</h1>
      <p className="contacto-description">Contáctanos por consultas o pedidos.</p>
      <form className="contacto-form">
        <label htmlFor="name" className="contacto-label">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          className="contacto-input"
        />
        <br />
        <label htmlFor="email" className="contacto-label">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Tu correo"
          className="contacto-input"
        />
        <br />
        <label htmlFor="message" className="contacto-label">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje"
          className="contacto-textarea"
        ></textarea>
        <br />
        <button type="submit" className="contacto-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
