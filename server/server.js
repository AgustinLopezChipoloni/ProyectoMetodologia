// server.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware para permitir solicitudes de otros dominios y recibir datos JSON
app.use(cors());
app.use(express.json());

// Configuración de la conexión con la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'Sqlgero45123.',
  database: 'sistemaVentas'
});

// Conecta a MySQL y verifica si hay errores
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Endpoint de login
app.post('/api/login', (req, res) => {
  const { correo, clave } = req.body;

  const query = 'SELECT * FROM Usuario WHERE correo = ? AND clave = ?';
  db.query(query, [correo, clave], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Login exitoso' });
    } else {
      res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Endpoint para agregar un nuevo proveedor
app.post('/api/proveedores', (req, res) => {
  const { Documento, RazonSocial, telefono, correo } = req.body;

  const query = 'INSERT INTO Proveedores (Documento, RazonSocial, telefono, correo) VALUES (?, ?, ?, ?)';
  db.query(query, [Documento, RazonSocial, telefono, correo], (err, result) => {
    if (err) {
      console.error('Error al agregar el proveedor:', err);
      return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
    res.json({ success: true, message: 'Proveedor agregado correctamente' });
  });
});
