import { Schema } from 'mongoose';

export const EncuentroDeportivoSchema = new Schema({
    ID_Encuentro_deportivo: { type: String},
    Equipo1: { type: String},
    Equipo2: {type: String},
    Fecha: { type: String},
    Hora: { type: String},
    Lugar_Partido: { type: String},
    //Esta referencia permite realizar la relacion con la entidad transaccional
    pronostico:{ type: Schema.Types.ObjectId, ref: "Pronostico"}
});