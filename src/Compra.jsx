import React, { useState } from 'react';
import './Compra.css';

const Compra = ({ productos, setProductos }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const agregarProducto = () => {
    if (nombre && cantidad > 0 && precio > 0) {
      const productoExistente = productos.find((prod) => prod.nombre === nombre);
      if (productoExistente) {
        setProductos(
          productos.map((prod) =>
            prod.nombre === nombre
              ? { ...prod, cantidad: prod.cantidad + Number(cantidad), precio: Number(precio), categoria, descripcion }
              : prod
          )
        );
      } else {
        setProductos([
          ...productos,
          { nombre, cantidad: Number(cantidad), precio: Number(precio), categoria, descripcion },
        ]);
      }
      // Reinicia los campos después de agregar el producto
      setNombre('');
      setCantidad('');
      setPrecio('');
      setCategoria('');
      setDescripcion('');
    }
  };

  return (
    <div className="compra-container">
      <h2>Compras</h2>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Empresa"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        rows="3"
      ></textarea>
      <button onClick={agregarProducto}>Agregar al Stock</button>
    </div>
  );
};

export default Compra;
