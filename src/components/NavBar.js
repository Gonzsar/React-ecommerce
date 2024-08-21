import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    const categories = ['Refrigeración', 'Electicidad', 'Sanitaria', 'Herramientas de mano'];

    const handleCategoryClick = (category) => {
        console.log(`Category clicked: ${category}`);
        // maneja la navegacion o actualiza el estado de la aplicacion
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: '#fff' }}>
            <div>
                <h1>Mi Ferretería</h1>
            </div>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                {categories.map((category) => (
                    <li
                        key={category}
                        style={{ margin: '0 15px', cursor: 'pointer' }}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
