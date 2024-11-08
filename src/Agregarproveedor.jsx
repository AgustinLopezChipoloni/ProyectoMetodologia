import React, { useState } from 'react';
import './Agregarproveedor.css'
const Agregarproveedor = () => {
  const [documento, setDocumento] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar que todos los campos están completos
    if (!documento || !razonSocial || !telefono || !correo) {
      setMensaje('Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/proveedores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Documento: documento,
          RazonSocial: razonSocial,
          telefono: telefono,
          correo: correo,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMensaje('Proveedor agregado correctamente');
        setDocumento('');
        setRazonSocial('');
        setTelefono('');
        setCorreo('');
      } else {
        setMensaje('Error al agregar el proveedor');
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Hubo un problema al agregar el proveedor.');
    }
  };

  return (
    <div className="aproveedor-container">
      <h2>Agregar Proveedor</h2>
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Documento"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
        />
        <input
          type="text"
          placeholder="Razón Social"
          value={razonSocial}
          onChange={(e) => setRazonSocial(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <button type="submit">Agregar Proveedor</button>
      </form>
    </div>
  );
};

export default Agregarproveedor;


