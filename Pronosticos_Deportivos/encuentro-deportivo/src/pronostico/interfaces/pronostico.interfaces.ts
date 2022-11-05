import { Document } from 'mongoose';

export interface Pronostico extends Document{
    PronosticoID: string;
    apostadorID: string;
    EncuentroDeportivoID: string;
    ResultadoPropuesto: string;
    ValorApuesta: number;
    Ganancia: number;
}
