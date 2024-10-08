import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from './CartWidget';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const { currentUser, logout } = useContext(AuthContext); // Usuario y logout del contexto
    const navigate = useNavigate(); // Para redirigir después del logout
    const categories = ['Refrigeración', 'Electricidad', 'Sanitaria', 'Herramientas de mano'];

    // Función para manejar el logout y redirigir
    const handleLogout = async () => {
        try {
            await logout();  // Llamada a la función de logout
            navigate('/');   // Redirigir al home tras el logout
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

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

                    {currentUser ? (
                        <div className="d-flex align-items-center">
                            {/* Mostrar siempre el email del usuario */}
                            <span className="text-light me-3">
                                Hola, {currentUser.email}
                            </span>
                            {/* Botón para cerrar sesión */}
                            <button className="btn btn-outline-light" onClick={handleLogout}>
                                Cerrar sesión
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login" className="btn btn-outline-light me-2">Iniciar sesión</Link>
                            <Link to="/register" className="btn btn-outline-light">Registrarse</Link>
                        </div>
                    )}
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
