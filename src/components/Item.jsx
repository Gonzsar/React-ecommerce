import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Categoría: {item.category}</p>
                    <Link to={`/item/${item.id}`} className="btn btn-primary">
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
