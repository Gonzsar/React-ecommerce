import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Simulamos un async-mock con detalles del producto
        const fetchItemDetail = async () => {
            const items = [
                { id: 1, name: 'Garrafa R22', category: 'Refrigeración', image: 'refrigeracion', description: 'Gas refrigerante para aire acondicionado.' },
                { id: 2, name: 'Panel Led Redondo Ext.', category: 'Electricidad', image: 'electricidad', description: 'Panel led para exteriores 12W.' },
                { id: 3, name: 'Loza Sanitaria', category: 'Sanitaria', image: 'sanitaria', description: 'Loza de baño.' },
            ];

            const foundItem = items.find(item => item.id === parseInt(itemId));
            setItem(foundItem);
        };

        fetchItemDetail();
    }, [itemId]);

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p><strong>Categoría: </strong>{item.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
