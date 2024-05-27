const express = require('express');
const {obtenerProyecto, crearProyecto, actualizarProyecto, eliminarProyecto} = require('../controllers/ProyectoController');

const router = express.Router();

router.get('/', obtenerProyecto);
router.post('/', crearProyecto);
router.put('/:id', actualizarProyecto);
router.delete('/:id', eliminarProyecto);

module.exports = router;