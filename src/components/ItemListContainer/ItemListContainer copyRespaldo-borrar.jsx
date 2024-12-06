import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tipo, setTipo] = useState(""); // Nueva lógica para filtrar por "men", "women" o "todos".

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true);
            try {
                const allProducts = await getProducts();
                // Filtra productos según el tipo seleccionado.
                const filteredProducts = tipo
                    ? allProducts.filter(prod => prod.category === tipo)
                    : allProducts;
                setProductos(filteredProducts);
            } catch (error) {
                console.error("Error al cargar productos:", error);
                setProductos([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [tipo, categoryId]); // Ejecuta cada vez que cambia el tipo o la categoría.

    if (loading) {
        return <p className="productos-title">Cargando productos...</p>;
    }

    if (!productos.length) {
        return <p className="productos-title">No hay productos disponibles.</p>;
    }

    return (
        <div className="productos-container">
            <h1 className="productos-title">
                Productos para {tipo === "men" ? "Hombres" : tipo === "women" ? "Mujeres" : "Todos"}
            </h1>
            <div className="productos-buttons">
                <button onClick={() => setTipo("")}>Todos</button>
                <button onClick={() => setTipo("men")}>Hombres</button>
                <button onClick={() => setTipo("women")}>Mujeres</button>
            </div>
            <div className="productos-grid">
                <ItemList products={productos} />
            </div>
        </div>
    );
};

export default ItemListContainer;
