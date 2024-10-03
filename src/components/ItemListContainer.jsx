import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

// Importa las imágenes
import refrigeracionImg from '../assets/img/refrigeracion.jpg';
import electricidadImg from '../assets/img/electricidad.jpg';
import sanitariaImg from '../assets/img/sanitaria.jpg';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            let products = [
                { id: 1, name: 'Garrafa R22', category: 'Refrigeración', image: refrigeracionImg },
                { id: 2, name: 'Panel Led Redondo Ext.', category: 'Electricidad', image: electricidadImg },
                { id: 3, name: 'Loza Sanitaria', category: 'Sanitaria', image: sanitariaImg },
            ];

            if (categoryId) {
                products = products.filter(item => item.category === categoryId);
            }

            setItems(products);
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div className="container my-5">
            <div className="text-center">
                <h1 className="display-4">{greeting}</h1>
                <p className="lead">Explora nuestra amplia gama de productos para todas tus necesidades.</p>
            </div>
            <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los Productos'}</h2>
            <div className="row">
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
