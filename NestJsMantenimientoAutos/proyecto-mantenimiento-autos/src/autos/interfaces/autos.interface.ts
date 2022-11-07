import { Document } from 'mongoose';
export interface Autos extends Document{
  readonly descripcion: string,
  readonly placa: string,
  readonly color: string,
  readonly fabricante: string,
  readonly tipo: string,
  readonly anio: string,
  readonly clasificacion: string,
}