//creacion del modelo que de la base de datos
import { Schema, model } from "mongoose"; //solo importo de mongose a schema , importa con modulos no 
                                   //se trae el mongose completo

const operacionesSchema = new Schema({
    numero1: {
        type: Number,
        required: true
    },
    numero2: {
        type: Number,
        required: true
    },
    operacion: {
        type: String,
        enum : ["+","-","*","/"],//valida que siempre se mande una de las opciones si no entra al catch
        required: true //este dato es requerido para guardar en la base de datos
    },
    resultado: {
        type: Number,
        required: true
    }
  }, { versionKey: false });

export default model('Operaciones',operacionesSchema);