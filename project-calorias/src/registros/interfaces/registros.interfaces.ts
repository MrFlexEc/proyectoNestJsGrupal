//importacion de libreria
import {Document} from 'mongoose';
//interfaces que se usara como modelo de los datos 
export interface Registros extends Document{
     //atributos de la entidad registro asignados por el docente.
     id_pacientes:String;
     id_platos:String;
     readonly fecha:String;
     readonly hora: String;
     readonly numero_de_calorias_consumida:Number;
     readonly numero_de_Porciones:Number;
    


}