import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Importa las imágenes
import refrigeracionImg from '../assets/img/refrigeracion.jpg';
import electricidadImg from '../assets/img/electricidad.jpg';
import sanitariaImg from '../assets/img/sanitaria.jpg';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchItemDetail = async () => {
            const items = [
                { id: 1, name: 'Garrafa R22', category: 'Refrigeración', image: refrigeracionImg, description: 'Gas refrigerante para aire acondicionado.' },
                { id: 2, name: 'Panel Led Redondo Ext.', category: 'Electricidad', image: electricidadImg, description: 'Panel led para exteriores 12W.' },
                { id: 3, name: 'Loza Sanitaria', category: 'Sanitaria', image: sanitariaImg, description: 'Loza de baño.' },
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
        return <div>Cargando...</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p><strong>Categoría: </strong>{item.category}</p>

                    {/* Selector de cantidad */}
                    <div className="quantity-selector d-flex align-items-center my-3">
                        <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
                        <span className="mx-3">{quantity}</span>
                        <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
                    </div>

                    <button className="btn btn-primary my-3">Añadir al carrito</button>

                    {/* Botón para volver al inicio */}
                    <Link to="/" className="btn btn-outline-secondary">Volver al inicio</Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
