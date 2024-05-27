const mongoose = require('mongoose');

const etapasSchema = mongoose.Schema({

    Nombre: {
        type: String,
        enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final'],
        require: true
    },
    FechaCreacion: {
        type: Date,
        default: new Date()
    },
    FechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Etapas', etapasSchema);