import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, removeItemFromCart, clearCart, updateItemQuantity } = useContext(CartContext);

    // Calcular el número total de productos y el precio total
    const totalProducts = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + ((item.price || 0) * (item.quantity || 0)), 0);

    // Si el carrito está vacío
    if (cartItems.length === 0) {
        return (
            <div className="container my-5 text-center">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2>Tu Carrito</h2>
            <ul className="list-group">
                {cartItems.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{item.name}</h5>
                            <p>Precio: ${item.price}</p>
                        </div>
                        
                        {/* Contenedor de cantidad y eliminar alineados horizontalmente */}
                        <div className="d-flex align-items-center">
                            {/* Botones para aumentar y disminuir la cantidad */}
                            <button 
                                className="btn btn-outline-secondary mx-2" 
                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity === 1} // Desactivar si la cantidad es 1
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button 
                                className="btn btn-outline-secondary mx-2" 
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </button>
                            
                            {/* Botón eliminar */}
                            <button 
                                onClick={() => removeItemFromCart(item.id)} 
                                className="btn btn-danger ml-3" // Se agrega margen izquierda
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <h4>Total Productos: {totalProducts}</h4>
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
            </div>
            <div className="mt-4 d-flex justify-content-between">
                <button onClick={clearCart} className="btn btn-warning">Vaciar Carrito</button>
                <Link to="/checkout" className="btn btn-primary">Ir al Checkout</Link>
            </div>
        </div>

    );
};

export default CartPage;
