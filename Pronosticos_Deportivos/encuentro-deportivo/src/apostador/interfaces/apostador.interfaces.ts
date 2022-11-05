import { Document } from 'mongoose';

export interface Apostador extends Document{
    apostadorID: string;
    Nombre: string;
    Identificacion: string;
    Celular: string;
}