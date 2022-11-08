import { Schema } from 'mongoose';

export const canchaSchema = new Schema({
    cancha: String,
    descripcion: String,
    reservacion:{ type: Schema.Types.ObjectId, ref: "reservacion"}
});