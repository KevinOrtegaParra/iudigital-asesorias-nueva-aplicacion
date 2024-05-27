const mongoose = require('mongoose');

const tipoProyectoSchema = mongoose.Schema({

    Nombre: {
        type: String,
        enum: ['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización'],
        unique: [true,'Ya existe'],
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

module.exports = mongoose.model('TipoProyecto', tipoProyectoSchema);