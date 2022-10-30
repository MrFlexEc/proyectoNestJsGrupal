import {Document} from 'mongoose';

export interface Platos extends Document{
    readonly id_p:Number;
    readonly nombre_plato:String;
    readonly porciones: String;


}