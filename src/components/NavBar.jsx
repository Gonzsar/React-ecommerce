import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const NavBar = () => {
    const categories = ['Refrigeración', 'Electricidad', 'Sanitaria', 'Herramientas de mano'];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <h2 className="text-light">Frío Polar</h2>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categories.map((category) => (
                                    <li key={category}>
                                        <Link to={`/category/${category}`} className="dropdown-item">
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
