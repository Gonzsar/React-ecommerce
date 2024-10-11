import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.category}</p>
        <p className="card-text">${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">Ver detalles</Link>
      </div>
    </div>
  );
};

export default Item;
