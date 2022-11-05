import { Schema } from 'mongoose';

export const ApostadorSchema = new Schema({
    apostadorID: { type: String},
    Nombre: { type: String},
    Identificacion: {type: String},
    Celular: { type: String}
});