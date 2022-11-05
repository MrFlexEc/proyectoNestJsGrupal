//Libería de MongoDB para conexión
import { Schema } from 'mongoose';

export const PronosticoSchema = new Schema({

    //Aplicación de relación de entidades maestras: Apostador y encuentro deportivo para unión
    apostadorID:[{ type: Schema.Types.ObjectId,ref:"Apostador" }],
    EncuentroDeportivoID:[{ type: Schema.Types.ObjectId,ref:"encuentro_deportivo" }],

    //Atributos
    ResultadoPropuesto: {type: String},
    ValorApuesta: { type: Number},
    Ganancia: { type: Number}
});