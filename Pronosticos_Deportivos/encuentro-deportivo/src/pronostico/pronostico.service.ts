import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Pronostico } from './interfaces/pronostico.interfaces';
import { CreatePronosticoDTO } from './dto/pronostico.dto';

@Injectable()
export class PronosticoService {
    constructor(@InjectModel('Pronostico') private PronosticoModel: Model<Pronostico>) {}

    async getPronosticos(): Promise<Pronostico[]> {
        const pronosticos = await this.PronosticoModel.find();
        return pronosticos;
    }

    async getPronostico(PronosticoID: string): Promise<Pronostico> {
        const pronostico = await this.PronosticoModel.findById(PronosticoID);
        return pronostico;
    }

    async createPronostico(createpronosticoDTO: CreatePronosticoDTO): Promise<Pronostico> {
        const pronostico = new this.PronosticoModel(createpronosticoDTO);
        return await pronostico.save();
    }

    async deletePronostico(apostadorID: string): Promise<Pronostico>{
        const deletePronostico = await this.PronosticoModel.findByIdAndDelete(apostadorID);
        return deletePronostico;
    }

    async updatePronostico(PronosticoID: string, createpronosticoDTO: CreatePronosticoDTO): Promise<Pronostico> {
        const updatePronostico = await this.PronosticoModel.findByIdAndUpdate(PronosticoID, createpronosticoDTO, { new: true });
        return updatePronostico;
    }
}