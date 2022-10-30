import{ Schema } from 'mongoose';

export const PlatosSchema = new Schema({
    id_p: {type:Number, requied:true},
    nombre_plato: String,
    porciones: String

});