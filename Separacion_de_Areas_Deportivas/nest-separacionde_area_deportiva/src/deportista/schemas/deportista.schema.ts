import { Schema } from 'mongoose';

export const deportistaSchema = new Schema({
    nombre: String,
    edad: String,
    identificacion: String,
    equipo_representa: String,
    reservacion:{ type: Schema.Types.ObjectId, ref: "reservacion"}
});