import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h2 style={{ color: '#007bff' }}>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;
