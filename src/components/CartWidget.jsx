import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <Link to="/cart" className="btn btn-outline-light position-relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
            </span>
        </Link>
    );
};

export default CartWidget;
