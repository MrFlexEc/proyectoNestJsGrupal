//Importación de la librería Mongoose para guardar los datos
import { Document } from 'mongoose';
//Creación de la clase y escritura de entidades para visualizar mediante la interfaz
export interface Encuentro_deportivo extends Document{
    ID_Encuentro_deportivo: string;
    Equipo1: string;
    Equipo2: string;
    Fecha: string;
    Hora: string;
    Lugar_Partido: string;
}