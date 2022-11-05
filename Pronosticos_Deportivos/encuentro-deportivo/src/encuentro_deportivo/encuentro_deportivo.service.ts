import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Encuentro_deportivo } from './interface/encuentro_deportivo.interfaces';
import { CreateEncuentroDeportivoDTO } from './dto/encuentro_deportivo.dto';

@Injectable()
export class EncuentroDeportivoService {
    constructor(@InjectModel('EncuentroDeportivo') private EncuentroDeportivoModel: Model<Encuentro_deportivo>) {}

    async getEncuentroDeportivos(): Promise<Encuentro_deportivo[]> {
        const EncuentroDeportivos = await this.EncuentroDeportivoModel.find();
        return EncuentroDeportivos;
    }

    async getEncuentroDeportivo(EncuentroDeportivoID: string): Promise<Encuentro_deportivo> {
        const EncuentroDeportivo = await this.EncuentroDeportivoModel.findById(EncuentroDeportivoID);
        return EncuentroDeportivo;
    }

    async createEncuentroDeportivo(createencuentrodeportivoDTO: CreateEncuentroDeportivoDTO): Promise<Encuentro_deportivo> {
        const EncuentroDeportivo = new this.EncuentroDeportivoModel(createencuentrodeportivoDTO);
        return await EncuentroDeportivo.save();
    }

    async deleteEncuentroDeportivo(EncuentroDeportivoID: string): Promise<Encuentro_deportivo>{
        const deleteEncuentroDeportivo = await this.EncuentroDeportivoModel.findByIdAndDelete(EncuentroDeportivoID);
        return deleteEncuentroDeportivo;
    }

    async updateEncuentroDeportivo(EncuentroDeportivoID: string, createencuentrodeportivoDTO: CreateEncuentroDeportivoDTO): Promise<Encuentro_deportivo> {
        const updateEncuentroDeportivo = await this.EncuentroDeportivoModel.findByIdAndUpdate(EncuentroDeportivoID, createencuentrodeportivoDTO, { new: true });
        return updateEncuentroDeportivo;
    }
}
