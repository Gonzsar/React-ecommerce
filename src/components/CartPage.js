import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems } = useContext(CartContext);

    // Si el carrito está vacío, muestra un mensaje
    if (cartItems.length === 0) {
        return (
            <div className="container my-5 text-center">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
            </div>
        );
    }

    // Si el carrito tiene productos, muéstralos
    return (
        <div className="container my-5">
            <h2>Tu Carrito</h2>
            <ul className="list-group">
                {cartItems.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                        <span>Cantidad: {item.quantity}</span>
                    </li>
                ))}
            </ul>
            <Link to="/" className="btn btn-secondary mt-4">Seguir comprando</Link>
        </div>
    );
};

export default CartPage;
