import { CreateDeportistaDTO } from './dto/deportista.dto';
import { DeportistaService } from './deportista.service';
export declare class DeportistaController {
    private deportistaService;
    constructor(deportistaService: DeportistaService);
    createPost(res: any, createDeportistaDTO: CreateDeportistaDTO): Promise<any>;
    getDeportista(res: any): Promise<any>;
    deleteDeportista(res: any, deportistaID: any): Promise<any>;
    updateDeportista(resizeBy: any, createDeportistaDTO: CreateDeportistaDTO, deportistaID: any): Promise<any>;
}
