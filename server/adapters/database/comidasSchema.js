const mongoose = require('mongoose');

const ComidasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    enum: ['vegetables', 'protein', 'nuts&seeds', 'shakes'],
    required: true,
  },
  ocasion: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner'],
    required: true,
  },
  calorias: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: [String],
    required: true,
  },
  valoraciones: {
    type: [Number],
    default: [],
  },
  promedioValoracion: {
    type: Number,
    default: 0,
  },
  Delivery: {
    type: Number,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
});

 
module.exports = mongoose.model('comidas', ComidasSchema, 'comidas');
