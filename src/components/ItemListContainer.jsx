import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Item from './Item';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        // simulamos un async-mock con productos filtrados por categoría
        const fetchItems = async () => {
            let products = [
                { id: 1, name: 'Garrafa R22', category: 'Refrigeración', image: 'refrigeracion' },
                { id: 2, name: 'Panel Led Redondo Ext.', category: 'Electricidad', image: 'electricidad' },
                { id: 3, name: 'Loza Sanitaria', category: 'Sanitaria', image: 'sanitaria' },
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
