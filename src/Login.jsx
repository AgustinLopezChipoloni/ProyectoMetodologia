// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        correo,
        clave,
      });

      if (response.data.success) {
        setMensaje('Login exitoso');
        // Redirigir o realizar alguna acción en caso de éxito
      } else {
        setMensaje('Credenciales inválidas');
      }
    } catch (error) {
      console.error(error);
      setMensaje('Error al iniciar sesión');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Correo:</label>
          <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Login;
