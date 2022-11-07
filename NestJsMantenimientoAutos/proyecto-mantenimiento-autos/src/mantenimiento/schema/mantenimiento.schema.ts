import { Schema } from 'mongoose';
export const MantenimientoSchema = new Schema({
  idAuto: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Autos',
    },
  ],
  idConcepto: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Conceptos',
    },
  ],
  fechaMantenimiento: String,
  detalle: String,
  precio: Number,
});
