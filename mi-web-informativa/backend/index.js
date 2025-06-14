const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Importa las rutas de usuarios
const usuariosRoutes = require('./routes/usuarios');

// Middleware
app.use(cors()); // Permite solicitudes desde otros dominios
app.use(express.json()); // Para manejar datos en formato JSON

// Ruta para los usuarios
app.use('/api/usuarios', usuariosRoutes);

// Levantar el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
