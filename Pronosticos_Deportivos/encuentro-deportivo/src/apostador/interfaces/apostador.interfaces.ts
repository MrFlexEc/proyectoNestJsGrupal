//Importación de la librería Mongoose para guardar los datos
import { Document } from 'mongoose';
//Creación de la clase y escritura de entidades para visualizar mediante la interfaz
export interface Apostador extends Document{
    apostadorID: string;
    Nombre: string;
    Identificacion: string;
    Celular: string;
}