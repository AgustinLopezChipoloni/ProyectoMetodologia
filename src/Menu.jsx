import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      {/* Imagen central */}
      <img src="/drugstore-lopez.png" 
      alt="" 
      className="image-central" />


      {/* Menú de navegación */}
      <nav>
        <h2></h2>
        <button onClick={() => navigate('/Venta')}>Venta</button>
        <button onClick={() => navigate('/Compra')}>Compra</button>
        <button onClick={() => navigate('/Stock')}>Stock</button>
        <button onClick={() => navigate('/Agregarproveedor')}>Añadir Proveedores</button>
      </nav>
    </div>
  );
};

export default Menu;
