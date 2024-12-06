import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const DebugDataView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Cargando datos del producto...</p>;
  }

  return (
    <div>
      <h1>Debug Data</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

export default DebugDataView;
