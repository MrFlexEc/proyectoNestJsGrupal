import { CreateReservacionDTO } from './dto/reservacion.dto';
import { ReservacionService } from './reservacion.service';
export declare class ReservacionController {
    private reservacionService;
    constructor(reservacionService: ReservacionService);
    createPost(res: any, createReservacionDTO: CreateReservacionDTO): Promise<any>;
    getReservacion(res: any): Promise<any>;
    deleteReservacion(res: any, reservacionID: any): Promise<any>;
    updateReservacion(resizeBy: any, createReservacionDTO: CreateReservacionDTO, reservacionID: any): Promise<any>;
}
