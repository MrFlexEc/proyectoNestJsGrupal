import { CreateCanchaDTO } from './dto/cancha.dto';
import { CanchaService } from './cancha.service';
export declare class CanchaController {
    private canchaService;
    constructor(canchaService: CanchaService);
    createPost(res: any, createCanchaDTO: CreateCanchaDTO): Promise<any>;
    getCancha(res: any): Promise<any>;
    deleteCancha(res: any, canchaID: any): Promise<any>;
    updateCancha(resizeBy: any, createCanchaDTO: CreateCanchaDTO, canchaID: any): Promise<any>;
}
