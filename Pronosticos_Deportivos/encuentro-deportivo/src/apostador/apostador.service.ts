import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Apostador } from './interfaces/apostador.interfaces';
import { CreateApostadorDTO } from './dto/apostador.dto';


@Injectable()
export class ApostadorService {
    constructor(@InjectModel('Apostador') private ApostadorModel: Model<Apostador>) {}

    async getApostadores(): Promise<Apostador[]> {
        const apostadores = await this.ApostadorModel.find();
        return apostadores;
    }

    async getApostador(apostadorID: string): Promise<Apostador> {
        const apostador = await this.ApostadorModel.findById(apostadorID);
        return apostador;
    }

    async createApostador(createapostadorDTO: CreateApostadorDTO): Promise<Apostador> {
        const apostador = new this.ApostadorModel(createapostadorDTO);
        return await apostador.save();
    }

    async deleteApostador(apostadorID: string): Promise<Apostador>{
        const deleteApostador = await this.ApostadorModel.findByIdAndDelete(apostadorID);
        return deleteApostador;
    }

    async updateApostador(apostadorID: string, createapostadorDTO: CreateApostadorDTO): Promise<Apostador> {
        const updateApostador = await this.ApostadorModel.findByIdAndUpdate(apostadorID,createapostadorDTO, { new: true });
        return updateApostador;
    }
}
