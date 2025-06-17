const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


const usuariosRoutes = require('./routes/usuarios');

app.use(cors());
app.use(express.json());

// Ruta raíz que devuelve la lista de usuarios (igual que /api/usuarios)
app.get('/', (req, res) => {


  const db = require('./db');
 
 const query = 'SELECT id_usuario, nombre_completo, usuario, contrasena, correo, fecha_creacion, estado FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    res.json(results);
  });
});

app.use('/api/usuarios', usuariosRoutes);

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
