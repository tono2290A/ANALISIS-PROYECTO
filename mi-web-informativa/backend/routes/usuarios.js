const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => {
  console.log('Solicitud GET /api/usuarios recibida');  // <-- Log
  const query = 'SELECT id_usuario, nombre_completo, usuario, correo, fecha_creacion, estado FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error en consulta:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    console.log('Resultados obtenidos:', results);  // <-- Log resultados
    res.json(results);
  });
});

// En tu archivo rutas/usuarios.js
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT id_usuario, nombre_completo, usuario, correo, fecha_creacion, estado, contrasena FROM usuarios WHERE id_usuario = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al obtener usuario:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    if (results.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(results[0]);
  });
});


module.exports = router;
