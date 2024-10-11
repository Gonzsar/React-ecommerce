import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { getDoc, doc } from 'firebase/firestore'; // Importar Firestore
import { db } from '../firebase/firebase'; // Importar la instancia de Firestore
import Swal from 'sweetalert2';  // Importar SweetAlert2

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addItemToCart } = useContext(CartContext);  // Usar contexto

    useEffect(() => {
        const fetchItemDetail = async () => {
            try {
                const itemDoc = await getDoc(doc(db, 'products', itemId)); // Traer el producto por su ID de Firestore
                if (itemDoc.exists()) {
                    setItem(itemDoc.data()); // Establece los datos del producto
                } else {
                    console.log('No se encontró el producto');
                }
            } catch (error) {
                console.log('Error al obtener detalles del producto:', error);
            }
        };

        fetchItemDetail();
    }, [itemId]);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        addItemToCart(item, quantity);

        // Mostrar alerta SweetAlert2
        Swal.fire({
            title: 'Producto agregado',
            text: `${item.title} se ha agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

    if (!item) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <img src={item.thumbnail} alt={item.title} className="img-fluid mb-4" style={{ maxHeight: '300px' }} />
                    <h1 className="mb-3" style={{ fontSize: '2.5rem' }}>{item.title}</h1>
                    <p className="lead mb-4">{item.description}</p>
                    <p><strong>Estado: </strong>{item.stock ? 'En stock' : 'No disponible'}</p>
                    {item.featured && <p className="badge bg-warning text-dark">Producto Destacado</p>}
                    <p><strong>Precio: </strong>${item.price}</p>

                    {/* Selector de cantidad */}
                    <div className="quantity-selector d-flex justify-content-center align-items-center mb-4">
                        <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
                        <span className="mx-3">{quantity}</span>
                        <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
                    </div>

                    {/* Botones */}
                    <button className="btn btn-primary my-3" onClick={() => handleAddToCart(item, quantity)}>Añadir al carrito</button>
                    <Link to="/" className="btn btn-outline-secondary btn-lg">Volver al inicio</Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
