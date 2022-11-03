import {Document} from 'mongoose';
//interface con los atributos para usar mediante esta interface.

 export interface Pacientes extends Document{
      //atributos de la entidad Paciente
      nombre:String;
      identificacion: String;
      edad: Number;
      altura: Number;
}
