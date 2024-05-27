const mongoose = require('mongoose');

const proyectoSchema = mongoose.Schema({

    Numero: {
        type: String,
        require: true,
        unique: [true,'Ya existe'],
    },
    Título: {
        type: String,
        require: true
    },
    FechaIniciacion: {
        type: Date,
        require: true
    },
    FechaEntrega: {
        type: Date,
        require: true
    },
    valor: {
        type: Number,
        require: true
    },
    FechaCreacion: {
        type: Date,
        default: new Date()
    },
    FechaActualizacion: {
        type: Date,
        default: new Date()
    },Cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    TipoProyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    Universidad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    Etapas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Etapas',
        required: true   
    }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);