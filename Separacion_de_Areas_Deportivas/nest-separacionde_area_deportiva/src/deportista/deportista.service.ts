import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Deportista } from './interfaces/deportista.interfaces';
import { CreateDeportistaDTO } from './dto/deportista.dto';

@Injectable()
export class DeportistaService {

    constructor(@InjectModel('deportista') private deportistaModel: Model<Deportista>){}

    async getDeportista(): Promise<Deportista[]>{
        const deportista = await this.deportistaModel.find()
        return deportista;
    }

    async createDeportista(createDeportistaDTO: CreateDeportistaDTO): Promise<Deportista>{
        const deportista = new this.deportistaModel(createDeportistaDTO);
        return await deportista.save();
    }

    async deleteDeportista(deportistaID: string): Promise<Deportista>{
        const deletedeportista = await this.deportistaModel.findByIdAndDelete(deportistaID);
        return deletedeportista;
    }

    async updateDeportista(deportistaID: string, createDeportistaDTO: CreateDeportistaDTO): Promise<Deportista>{
        const updatedeportista = await this.deportistaModel.findByIdAndUpdate(deportistaID, createDeportistaDTO, { new: true});
        return updatedeportista
    }

}
