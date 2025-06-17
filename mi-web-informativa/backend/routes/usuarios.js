const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {
  const query = 'SELECT id_usuario, nombre_completo, usuario, contrasena, correo, fecha_creacion, estado FROM usuarios';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    res.json(results);
  });
});


router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT id_usuario, nombre_completo, usuario, contrasena, correo, fecha_creacion, estado FROM usuarios WHERE id_usuario = ?';
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    if (results.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(results[0]);
  });
});

// Agregar nuevo usuario
router.post('/', (req, res) => {
  const { nombre_completo, usuario, contrasena, correo, estado } = req.body;

  if (!nombre_completo || !usuario || !contrasena || !correo || !estado) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  const query = 'INSERT INTO usuarios (nombre_completo, usuario, contrasena, correo, fecha_creacion, estado) VALUES (?, ?, ?, ?, NOW(), ?)';
  db.query(query, [nombre_completo, usuario, contrasena, correo, estado], (err, result) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      return res.status(500).json({ error: 'Error al insertar usuario' });
    }
    res.status(201).json({ message: 'Usuario agregado', id_usuario: result.insertId });
  });
});

// Actualizar usuario (con opción de actualizar contrasena si viene)
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { nombre_completo, usuario, correo, estado, contrasena } = req.body;

  if (!nombre_completo || !usuario || !correo || !estado) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  let query;
  let params;

  if (contrasena && contrasena.trim() !== '') {
    // Actualiza todo incluyendo contrasena
    query = 'UPDATE usuarios SET nombre_completo = ?, usuario = ?, correo = ?, estado = ?, contrasena = ? WHERE id_usuario = ?';
    params = [nombre_completo, usuario, correo, estado, contrasena, id];
  } else {
    // Actualiza sin cambiar contrasena
    query = 'UPDATE usuarios SET nombre_completo = ?, usuario = ?, correo = ?, estado = ? WHERE id_usuario = ?';
    params = [nombre_completo, usuario, correo, estado, id];
  }

  db.query(query, params, (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar usuario' });
    res.json({ message: 'Usuario actualizado' });
  });
});

// Eliminar usuario
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM usuarios WHERE id_usuario = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar usuario' });
    res.json({ message: 'Usuario eliminado' });
  });
});

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;

  // Mostramos los datos que se reciben
  console.log('🟡 Datos recibidos:', { usuario, contrasena });

  if (!usuario || !contrasena) {
    return res.status(400).json({ success: false, message: 'Usuario y contraseña son requeridos' });
  }

  const query = 'SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?';

  db.query(query, [usuario, contrasena], (err, results) => {
    if (err) {
      console.error('🔴 Error en la base de datos:', err);
      return res.status(500).json({ success: false, message: 'Error en la base de datos' });
    }

    // Mostramos los resultados que devuelve la base de datos
    console.log('🟢 Resultados de la consulta:', results);

    if (results.length > 0) {
      const user = results[0];
      return res.json({
        success: true,
        user: {
          id: user.id_usuario,
          nombre: user.nombre_completo,
          usuario: user.usuario
        }
      });
    } else {
      return res.status(404).json({ success: false, message: 'Credenciales inválidas' });
    }
  });
});
module.exports = router;
