import { Model } from 'mongoose';
import { Reservacion } from './interfaces/reservacion.interfaces';
import { CreateReservacionDTO } from './dto/reservacion.dto';
export declare class ReservacionService {
    private reservacionModel;
    constructor(reservacionModel: Model<Reservacion>);
    getReservacion(): Promise<Reservacion[]>;
    createReservacion(createReservacionDTO: CreateReservacionDTO): Promise<Reservacion>;
    deleteReservacion(reservacionID: string): Promise<Reservacion>;
    updateReservacion(reservacionID: string, createReservacionDTO: CreateReservacionDTO): Promise<Reservacion>;
}
