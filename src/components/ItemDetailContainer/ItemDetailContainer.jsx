import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ItemDetails from "./ItemDetails";


console.log("ItemDetailContainer se está ejecutando");

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log("Valor de ID en useParams:", id);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("ID recibido para consultar en Firestore:", id);
        const docRef = doc(db, "items", id); // Referencia al documento
        const docSnap = await getDoc(docRef); // Obtener el documento

        if (docSnap.exists()) {
          const productData = { id: docSnap.id, ...docSnap.data() };
          console.log("Producto encontrado en Firebase:", productData);
          setProduct(productData); // Guardar producto en el estado
        } else {
          console.error("Producto no encontrado en Firebase");
        }
      } catch (error) {
        console.error("Error al obtener el producto desde Firebase:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando detalle...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return <ItemDetails product={product} />;
};

export default ItemDetailContainer;
