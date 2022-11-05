//Importación de librerías, incorporando interfaces y clases
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Encuentro_deportivo } from './interface/encuentro_deportivo.interfaces';
import { CreateEncuentroDeportivoDTO } from './dto/encuentro_deportivo.dto';

@Injectable()
export class EncuentroDeportivoService {
    constructor(@InjectModel('EncuentroDeportivo') private EncuentroDeportivoModel: Model<Encuentro_deportivo>) {}

    //Metodo Get para visualizar datos de los apostadores
    async getEncuentroDeportivos(): Promise<Encuentro_deportivo[]> {
        const EncuentroDeportivos = await this.EncuentroDeportivoModel.find();
        return EncuentroDeportivos;
    }

    async getEncuentroDeportivo(EncuentroDeportivoID: string): Promise<Encuentro_deportivo> {
        const EncuentroDeportivo = await this.EncuentroDeportivoModel.findById(EncuentroDeportivoID);
        return EncuentroDeportivo;
    }

    //Metodo Create para poder agregar información acerca de los Encuentros deportivos
    async createEncuentroDeportivo(createencuentrodeportivoDTO: CreateEncuentroDeportivoDTO): Promise<Encuentro_deportivo> {
        const EncuentroDeportivo = new this.EncuentroDeportivoModel(createencuentrodeportivoDTO);
        return await EncuentroDeportivo.save();
    }

    //Metodo Delete para eliminar la información de los Encuentros deportivos
    async deleteEncuentroDeportivo(EncuentroDeportivoID: string): Promise<Encuentro_deportivo>{
        const deleteEncuentroDeportivo = await this.EncuentroDeportivoModel.findByIdAndDelete(EncuentroDeportivoID);
        return deleteEncuentroDeportivo;
    }

    //Metodo Update para actualizar o editar la información de los Encuentros deportivos
    async updateEncuentroDeportivo(EncuentroDeportivoID: string, createencuentrodeportivoDTO: CreateEncuentroDeportivoDTO): Promise<Encuentro_deportivo> {
        const updateEncuentroDeportivo = await this.EncuentroDeportivoModel.findByIdAndUpdate(EncuentroDeportivoID, createencuentrodeportivoDTO, { new: true });
        return updateEncuentroDeportivo;
    }
}
