import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import FilterButtons from "./FilterButtons";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    

    const fetchData = async () => {
        console.log("Iniciando fetch desde Firebase...");
      try {
        const querySnapshot = await getDocs(collection(db, "items"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Datos de Firestore:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = filter === "all"
    ? products
    : products.filter(product => product.category === filter);

  return (
    <div>
      <FilterButtons setFilter={setFilter} />
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
