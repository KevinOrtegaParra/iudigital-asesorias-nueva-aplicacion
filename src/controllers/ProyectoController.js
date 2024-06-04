const Proyecto = require('../models/proyecto');
const Cliente = require('../models/cliente');
const Etapas = require('../models/etapas');
const TipoProyecto = require('../models/tipoProyecto');
const Universidad = require('../models/universidad');
const { request, response } = require('express');

const obtenerProyecto = async (req = request, res = response) => {
    console.log("peticion a getProyecto");
    try {
        const proyecto = await Proyecto.find()
        .populate({
            path: 'Cliente',
            select: 'Nombre Email'  
          }).populate({
            path: 'Etapas',
            select: 'Nombre'   
          }).populate({
            path: 'TipoProyecto',
            select: 'Nombre'   
          }).populate({
            path: 'Universidad',
            select: 'Nombre Direccion Telefono'  
          });
        return res.json(proyecto);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearProyecto = async (req = request, res = response) => {
    try {
        const body = req.body;
        const proyecto = new Proyecto(body);
        await proyecto.save();
        return res.status(201).json(proyecto);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarProyecto = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const proyecto = await Proyecto.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(proyecto);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarProyecto = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Proyecto.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerProyecto,
    crearProyecto,
    actualizarProyecto,
    eliminarProyecto
})