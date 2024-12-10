import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ConnectionIndicator = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await getDocs(collection(db, "items")); // Intento de conexión
        setIsConnected(true); // Conexión exitosa
      } catch (error) {
        setIsConnected(false); // Fallo en la conexión
      }
    };

    checkConnection();

    // Opcional: Verificar cada 10 segundos
    const interval = setInterval(checkConnection, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: isConnected ? "green" : "red",
        marginLeft: "10px",
        border: "1px solid black",
      }}
      title={isConnected ? "Conectado a Firebase" : "Sin conexión a Firebase"}
    ></div>
  );
};

export default ConnectionIndicator;
