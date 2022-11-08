import { Model } from 'mongoose';
import { Deportista } from './interfaces/deportista.interfaces';
import { CreateDeportistaDTO } from './dto/deportista.dto';
export declare class DeportistaService {
    private deportistaModel;
    constructor(deportistaModel: Model<Deportista>);
    getDeportista(): Promise<Deportista[]>;
    createDeportista(createDeportistaDTO: CreateDeportistaDTO): Promise<Deportista>;
    deleteDeportista(deportistaID: string): Promise<Deportista>;
    updateDeportista(deportistaID: string, createDeportistaDTO: CreateDeportistaDTO): Promise<Deportista>;
}
