//Importación de librerías, incorporando interfaces y clases
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Apostador } from './interfaces/apostador.interfaces';
import { CreateApostadorDTO } from './dto/apostador.dto';


@Injectable()
export class ApostadorService {
    constructor(@InjectModel('Apostador') private ApostadorModel: Model<Apostador>) {}

    //Metodo Get para visualizar datos de los apostadores
    async getApostadores(): Promise<Apostador[]> {
        const apostadores = await this.ApostadorModel.find();
        return apostadores;
    }

    async getApostador(apostadorID: string): Promise<Apostador> {
        const apostador = await this.ApostadorModel.findById(apostadorID);
        return apostador;
    }

    //Metodo Create para poder agregar información acerca de los apostadores
    async createApostador(createapostadorDTO: CreateApostadorDTO): Promise<Apostador> {
        const apostador = new this.ApostadorModel(createapostadorDTO);
        return await apostador.save();
    }

    //Metodo Delete para eliminar la información de los apostadores
    async deleteApostador(apostadorID: string): Promise<Apostador>{
        const deleteApostador = await this.ApostadorModel.findByIdAndDelete(apostadorID);
        return deleteApostador;
    }

    //Metodo Update para actualizar o editar la información de los apostadores
    async updateApostador(apostadorID: string, createapostadorDTO: CreateApostadorDTO): Promise<Apostador> {
        const updateApostador = await this.ApostadorModel.findByIdAndUpdate(apostadorID,createapostadorDTO, { new: true });
        return updateApostador;
    }
}
