import { Schema } from 'mongoose';

export const ApostadorSchema = new Schema({
    apostadorID: { type: String},
    Nombre: { type: String},
    Identificacion: {type: String},
    Celular: { type: String},
    //Esta referencia permite realizar la relacion con la entidad transaccional
    pronostico:{ type: Schema.Types.ObjectId, ref: "Pronostico"}
});