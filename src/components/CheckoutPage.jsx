import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="container my-5">
            <h2>Resumen del Pedido</h2>
            <ul className="list-group">
                {cartItems.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{item.name}</h5>
                            <p>Cantidad: {item.quantity} | Precio: ${item.price}</p>
                        </div>
                        <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <h4>Total a pagar: ${totalPrice.toFixed(2)}</h4>
            </div>
            <button 
                onClick={() => window.location.href = `https://wa.me/?text=Mi pedido es: ${JSON.stringify(cartItems)} y el total es ${totalPrice.toFixed(2)}`} 
                className="btn btn-success mt-4"
            >
                Enviar pedido por WhatsApp
            </button>
            <Link to="/" className="btn btn-secondary mt-4">Volver al inicio</Link>
        </div>
    );
};

export default CheckoutPage;
