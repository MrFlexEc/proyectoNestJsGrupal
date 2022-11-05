import { Document } from 'mongoose';

export interface Encuentro_deportivo extends Document{
    ID_Encuentro_deportivo: string;
    Equipo1: string;
    Equipo2: string;
    Fecha: string;
    Hora: string;
    Lugar_Partido: string;
}