import { Schema } from 'mongoose';

export const reservacionSchema = new Schema({
    
    fecha_separacion: String,
    hora_inicio: String,
    hora_fin: String,

    canchaID:[{ type: Schema.Types.ObjectId,ref:"cancha" }],
    deportistaID:[{ type: Schema.Types.ObjectId,ref:"deportista" }],
});