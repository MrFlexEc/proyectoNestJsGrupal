import { Model } from 'mongoose';
import { Cancha } from './interfaces/cancha.interface';
import { CreateCanchaDTO } from './dto/cancha.dto';
export declare class CanchaService {
    private canchaModel;
    constructor(canchaModel: Model<Cancha>);
    getCancha(): Promise<Cancha[]>;
    createCancha(createCanchaDTO: CreateCanchaDTO): Promise<Cancha>;
    deleteCancha(canchaID: string): Promise<Cancha>;
    updateCancha(canchaID: string, createCanchaDTO: CreateCanchaDTO): Promise<Cancha>;
}
