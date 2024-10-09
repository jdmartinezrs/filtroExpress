const mongoose = require('mongoose');

const ComidasSchema = mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    ingredientes: {
        type: [String],
        required: true,
        validate: {
          validator: function(v) {
            return v.length > 0; 
          },
          message: props => `${props.value} debe contener al menos un ingrediente.`
        }
      },
      precio:{
        type: Number,
        required: true,
        min:0
      },
      imagen:{
        type: String,
        required: true
      },
      categoria:{
        type:String,
        required: true
      },
},{timestamps: true});

module.exports = mongoose.model('Comida', ComidasSchema, 'comidas');