import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

// Importa las imágenes
import refrigeracionImg from '../assets/img/refrigeracion.jpg';
import electricidadImg from '../assets/img/electricidad.jpg';
import sanitariaImg from '../assets/img/sanitaria.jpg';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addItemToCart } = useContext(CartContext);  // Usar contexto

    useEffect(() => {
        const fetchItemDetail = async () => {
            const items = [
                { id: 1, name: 'Garrafa R22', category: 'Refrigeración', image: refrigeracionImg, description: 'Gas refrigerante para aire acondicionado.', stock: true, featured: true },
                { id: 2, name: 'Panel Led Redondo Ext.', category: 'Electricidad', image: electricidadImg, description: 'Panel led para exteriores 12W.', stock: true, featured: false },
                { id: 3, name: 'Loza Sanitaria', category: 'Sanitaria', image: sanitariaImg, description: 'Loza de baño.', stock: false, featured: false },
            ];

            const foundItem = items.find(item => item.id === parseInt(itemId));
            setItem(foundItem);
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
                    <img src={item.image} alt={item.name} className="img-fluid mb-4" style={{ maxHeight: '300px' }} />
                    <h1 className="mb-3" style={{ fontSize: '2.5rem' }}>{item.name}</h1>
                    <p className="lead mb-4">{item.description}</p>
                    <p><strong>Categoría: </strong>{item.category}</p>

                    {/* Información adicional */}
                    <div className="my-3">
                        <p><strong>Estado: </strong>{item.stock ? 'En stock' : 'No disponible'}</p>
                        {item.featured && <p className="badge bg-warning text-dark">Producto Destacado</p>}
                    </div>

                    {/* Selector de cantidad */}
                    <div className="quantity-selector d-flex justify-content-center align-items-center mb-4">
                        <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
                        <span className="mx-3">{quantity}</span>
                        <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
                    </div>

                    {/* Botones */}
                    <button className="btn btn-primary my-3" onClick={() => addItemToCart(item, quantity)}>Añadir al carrito</button>
                    <Link to="/" className="btn btn-outline-secondary btn-lg">Volver al inicio</Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
