import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Registros} from './interfaces/registros.interfaces';
import {CreateRegistroDTO} from './dto/registros.dto';

@Injectable()
export class RegistrosService {
    constructor(@InjectModel('Registros')private readonly registrosModel: Model<Registros> ){}
    async getRegistros():Promise<Registros[]>{
        const Registros = await this.registrosModel.find()
        return Registros;
    }
    async getRegistro(id_registro: Number):Promise<Registros>{
        const registro = await this.registrosModel.findById(id_registro)
        return registro;

    }
    async createRegistro(createRegistroDTO: CreateRegistroDTO): Promise<Registros>{
        const Registro = new this.registrosModel(createRegistroDTO);
        await Registro.save();
        return Registro;
    }
    async deleteRegistro(id_registro: Number):Promise<Registros>{
        const deleteRegistro = await  this.registrosModel.findByIdAndDelete(id_registro);
        return deleteRegistro;
    }
    async updateRegistro(id_registro: Number, createRegistroDTO: CreateRegistroDTO): Promise<Registros>{
        const updateRegistro = await this.registrosModel.findByIdAndUpdate(id_registro,createRegistroDTO,{new: true}); 
        return updateRegistro;
    }
}
