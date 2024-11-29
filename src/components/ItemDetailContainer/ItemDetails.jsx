import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import getProducts from "../../data/getProducts";
import "./ItemDetails.css";

const ItemDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const allProducts = await getProducts();
                const selectedProduct = allProducts.find(prod => prod.id === parseInt(id));
                setProduct(selectedProduct);
            } catch (error) {
                console.error("Error al cargar el producto:", error);
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

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <h2 className="product-detail-title">{product.name}</h2>
            <p className="product-detail-description">{product.description}</p>
            <p className="product-detail-price">Precio: ${product.precio}</p>
            <button onClick={() => navigate(-1)} className="product-detail-button">
                Volver
            </button>
        </div>
    );
};

export default ItemDetails;
