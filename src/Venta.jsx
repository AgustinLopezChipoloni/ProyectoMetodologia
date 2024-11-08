import React, { useState } from 'react';

const Venta = ({ productos, setProductos }) => {
  const [productoVenta, setProductoVenta] = useState('');
  const [cantidadVenta, setCantidadVenta] = useState(0);
  const [totalVenta, setTotalVenta] = useState(0);

  const venderProducto = () => {
    const producto = productos.find((prod) => prod.nombre === productoVenta);
    if (producto && producto.cantidad >= cantidadVenta) {
      setProductos(
        productos.map((prod) =>
          prod.nombre === productoVenta ? { ...prod, cantidad: prod.cantidad - cantidadVenta } : prod
        )
      );
      setTotalVenta(totalVenta + cantidadVenta); // Aquí podrías agregar el precio y sumar el total de venta.
      setProductoVenta('');
      setCantidadVenta(0);
    } else {
      alert('Cantidad no disponible o producto no encontrado');
    }
  };

  return (
    <div>
      <h2>Ventas</h2>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={productoVenta}
        onChange={(e) => setProductoVenta(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidadVenta}
        onChange={(e) => setCantidadVenta(Number(e.target.value))}
      />
      <button onClick={venderProducto}>Vender</button>
      <h3>Total de productos vendidos: {totalVenta}</h3>
    </div>
  );
};

export default Venta;