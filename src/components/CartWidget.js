import React from 'react';

const CartWidget = () => {
    const cartItemCount = 3; // Número hardcodeado

    return (
        <div className="position-relative">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart.png" alt="Cart" className="img-fluid" />
            <span
                className="badge badge-danger position-absolute"
                style={{
                    top: '-10px',
                    right: '-10px',
                    borderRadius: '50%',
                    padding: '5px 10px',
                }}
            >
                {cartItemCount}
            </span>
        </div>
    );
};

export default CartWidget;
