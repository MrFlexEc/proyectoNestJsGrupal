import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Platos} from './interfaces/platos.interfaces';
import {CreatePlatoDTO} from './dto/platos.dto';


@Injectable()
export class PlatosService {
    constructor(@InjectModel('Platos')private readonly  platosModel: Model<Platos> ){}

    async getPlatos():Promise<Platos[]>{
        const Platos = await this.platosModel.find()
        return Platos;
    }
    async getPlato(id_plato: Number):Promise<Platos>{
        const platos = await this.platosModel.findById(id_plato)
        return platos;

    }
   
    async createPlato(createPlatoDTO: CreatePlatoDTO): Promise<Platos>{
        const platos = new this.platosModel(createPlatoDTO);
        await platos.save();
        return platos;
    }
    async deletePlato(id_plato: Number):Promise<Platos>{
        const deletePlato = await  this.platosModel.findByIdAndDelete(id_plato);
        return deletePlato;
    }
    async updatePlato(id_plato: Number, createPlatoDTO: CreatePlatoDTO): Promise<Platos>{
        const UpdatePlato = await this.platosModel.findByIdAndUpdate(id_plato,createPlatoDTO,{new: true}); 
        return UpdatePlato;
    }

}
