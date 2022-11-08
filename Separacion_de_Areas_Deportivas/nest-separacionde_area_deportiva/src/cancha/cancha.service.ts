import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cancha } from './interfaces/cancha.interface';
import { CreateCanchaDTO } from './dto/cancha.dto';

@Injectable()
export class CanchaService {

    constructor(@InjectModel('cancha') private canchaModel: Model<Cancha>){}

    async getCancha(): Promise<Cancha[]>{
        const cancha = await this.canchaModel.find()
        return cancha;
    }

    async createCancha(createCanchaDTO: CreateCanchaDTO): Promise<Cancha>{
        const cancha = new this.canchaModel(createCanchaDTO);
        return await cancha.save();
    }

    async deleteCancha(canchaID: string): Promise<Cancha>{
        const deletecancha = await this.canchaModel.findByIdAndDelete(canchaID);
        return deletecancha;
    }

    async updateCancha(canchaID: string, createCanchaDTO: CreateCanchaDTO): Promise<Cancha>{
        const updatecancha = await this.canchaModel.findByIdAndUpdate(canchaID, createCanchaDTO, { new: true});
        return updatecancha
    }

}
