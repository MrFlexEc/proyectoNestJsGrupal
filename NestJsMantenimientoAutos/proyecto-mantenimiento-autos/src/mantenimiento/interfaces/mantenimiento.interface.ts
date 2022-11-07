import { Document } from 'mongoose';
export interface Mantenimiento extends Document {
  idAuto: string;
  idConcepto: string;
  readonly fechaMantenimiento: string;
  readonly detalle: string;
  readonly precio: number;
}
