import { Schema } from 'mongoose';

export const PronosticoSchema = new Schema({
    PronosticoID: { type: String},
    apostadorID: { type: String},
    EncuentroDeportivoID: { type: String},
    ResultadoPropuesto: {type: String},
    ValorApuesta: { type: Number},
    Ganancia: { type: Number}
});