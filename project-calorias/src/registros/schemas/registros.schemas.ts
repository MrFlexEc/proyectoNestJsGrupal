import{ Schema } from 'mongoose';

export const RegistrosSchema = new Schema({
    id_S: {type:Number, requied:true},
    fecha:String,
    hora: String,
    numero_de_calorias_consumida:Number,
    numero_de_Porciones:Number

});