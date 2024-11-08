import React, { useState, useEffect } from 'react';
import './Stock.css'
const Stock = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener los productos del stock
    // Por ejemplo, con fetch o axios:
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/productos');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="stock-container">
      <h2>Stock de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="3">No hay productos en el stock.</td>
            </tr>
          ) : (
            productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>${producto.precio}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
