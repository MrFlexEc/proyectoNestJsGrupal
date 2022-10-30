import { Schema } from 'mongoose'

export const AutosSchema = new Schema({
  descripcion: String,
  placa: String,
  color: String,
  fabricante: String,
  tipo: String,
  anio: String,
  clasificacion: String,
});