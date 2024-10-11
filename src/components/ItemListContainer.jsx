import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase/firebase';
import Item from './Item'; // Importa tu componente de item

const ItemListContainer = () => {
    const { category } = useParams(); // Obtenemos la categoría desde la URL
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // Estado para manejar el cargando

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = await getDocs(collection(db, "products"));
                const productsArray = productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Filtrar productos por categoría
                const filteredProducts = productsArray.filter(product => product.category === category);

                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);  // Ya terminó la carga
            }
            console.log("Categoría seleccionada:", category);  // Verifica si llega la categoría correctamente
        };

        fetchProducts();
    }, [category]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Productos en {category}</h2>
            <div className="row">
                {products.length > 0 ? (
                    products.map(product => (
                    <div key={product.id} className="col-md-4">
                        <Item product={product} />
                    </div>
                    ))
                    ) : (
                        <p>No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
        );
    };
export default ItemListContainer;