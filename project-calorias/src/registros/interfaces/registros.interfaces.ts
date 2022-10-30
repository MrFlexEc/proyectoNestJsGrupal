import {Document} from 'mongoose';
export interface Registros extends Document{
    readonly id_S:Number;
    readonly fecha:String;
    readonly hora: String;
    readonly numero_de_calorias_consumida:Number;
    readonly numero_de_Porciones:Number;
    


}