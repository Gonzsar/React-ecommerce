import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart" className="btn btn-outline-primary position-relative">
            <i className="bi bi-cart"></i>
            {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                </span>
            )}
        </Link>
    );
};

export default CartWidget;
