// ProductDetailButton.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const ProductDetailButton = ({ productId }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (!currentUser) {
      Swal.fire({
        title: 'Para ver precios tienes que ingresarte como usuario',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'INGRESAR AHORA',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    } else {
      navigate(`/products/${productId}`);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleViewDetails}>
      Ver detalles
    </button>
  );
};

export default ProductDetailButton;
