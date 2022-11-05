//Importación de la librería Mongoose para guardar los datos
import { Document } from 'mongoose';
//Creación de la clase y escritura de entidades para visualizar mediante la interfaz
export interface Pronostico extends Document{
    PronosticoID: string;
    apostadorID: string;
    EncuentroDeportivoID: string;
    ResultadoPropuesto: string;
    ValorApuesta: number;
    Ganancia: number;
}
