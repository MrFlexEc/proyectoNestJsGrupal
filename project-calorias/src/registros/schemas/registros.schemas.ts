//importacion de libreria para ser usada en la conexion de mongodb
import{ Schema } from 'mongoose';
//clase que contendra array de la entidad registro la cual se almacenaran en la base de datos de mongodb

export const RegistrosSchema = new Schema({
    //aplicando relacion, uso de ref dentro de la entidad Pacientes
    id_pacientes:[{
        type: Schema.Types.ObjectId,
        ref: "Pacientes"
    }],

    //aplicando relacion, uso de ref dentro de la entidad Platos
    id_platos:[{

        type: Schema.Types.ObjectId,
        ref:"Platos"
    }],
    
    fecha:String,
    hora: String,
    numero_de_calorias_consumida:Number,
    numero_de_Porciones:Number
    

});