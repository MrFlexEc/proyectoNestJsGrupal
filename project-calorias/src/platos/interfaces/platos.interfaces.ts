//importacion de la libreria 
import {Document} from 'mongoose';
//interface con los atributos para usar mediante esta interface.
 export interface Platos extends Document{
      nombre_plato:String;
      porciones: String;
}
