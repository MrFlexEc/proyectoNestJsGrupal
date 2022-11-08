import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Reservacion } from './interfaces/reservacion.interfaces';
import { CreateReservacionDTO } from './dto/reservacion.dto';

@Injectable()
export class ReservacionService {

    constructor(@InjectModel('reservacion') private reservacionModel: Model<Reservacion>){}

    async getReservacion(): Promise<Reservacion[]>{
        const reservacion = await this.reservacionModel.find()
        return reservacion;
    }

    async createReservacion(createReservacionDTO: CreateReservacionDTO): Promise<Reservacion>{
        const reservacion = new this.reservacionModel(createReservacionDTO);
        return await reservacion.save();
    }

    async deleteReservacion(reservacionID: string): Promise<Reservacion>{
        const deletereservacion = await this.reservacionModel.findByIdAndDelete(reservacionID);
        return deletereservacion;
    }

    async updateReservacion(reservacionID: string, createReservacionDTO: CreateReservacionDTO): Promise<Reservacion>{
        const updatereservacion = await this.reservacionModel.findByIdAndUpdate(reservacionID, createReservacionDTO, { new: true});
        return updatereservacion
    }

}
