import { Document } from 'mongoose';
export interface Concepto extends Document {
  readonly description: string;
}
