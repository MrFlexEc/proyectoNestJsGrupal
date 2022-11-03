//importacion librerias a usar, y de interfaces y clases
import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Platos} from './interfaces/platos.interfaces';//contiene los atributos del modelos a usar
import {CreatePlatoDTO} from './dto/platos.dto';

//clase que sera usada dentro de controlador de paciente, para el uso de las peticiones.
@Injectable()
export class PlatosService {
    constructor(@InjectModel('Platos')private readonly  platosModel: Model<Platos> ){}

    //metodo get para obtener todo los pacientes
    async getPlatos():Promise<Platos[]>{
        const Platos = await this.platosModel.find()
        return Platos;
    }
    //metodo get para obtener un plato
    async getPlato(id_plato: Number):Promise<Platos>{
        const plato = await this.platosModel.findById(id_plato)
        return plato;

    }
    //metodo para crear un plato
    async createPlato(createPlatoDTO: CreatePlatoDTO): Promise<Platos>{
        const plato = new this.platosModel(createPlatoDTO);
        await plato.save();//guarda el plato.
        return plato;
    }
    //metodo delete para eliminar un plato aparitr de un parametro
    async deletePlato(id_plato: Number):Promise<Platos>{
        const deletePlato = await  this.platosModel.findByIdAndDelete(id_plato);
        return deletePlato;
    }
    //metodo update para modificar un plato,mediante un parametro id_plato
    async updatePlato(id_plato: Number, createPlatoDTO: CreatePlatoDTO): Promise<Platos>{
        const UpdatePlato = await this.platosModel.findByIdAndUpdate(id_plato,createPlatoDTO,{new: true}); 
        return UpdatePlato;
    }

}
