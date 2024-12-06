import React from "react";

const DebugData = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No hay datos para mostrar desde DebugData.</p>;
  }

  return (
    <div>
      <h2>Datos del Producto</h2>
      {data.map((item, index) => (
        <div key={index}>
          <h3>Item {index + 1}</h3>
          <ul>
            {Object.entries(item).map(([key, value]) => (
              <li key={key}>
                <strong>{key}</strong>: {value} <em>({typeof value})</em>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DebugData;
