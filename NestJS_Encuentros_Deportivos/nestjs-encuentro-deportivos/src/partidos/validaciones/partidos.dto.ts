//importamos las funciones para validar los datos
import { IsNotEmpty, IsString,IsDateString,IsInt} from 'class-validator';

export class CrearModificarPartido {

    @IsNotEmpty({message: 'La fecha no puede estar vacio'})
    @IsDateString({message: 'La fecha debe estar correcta'})
    Fecha_partido:Date;

    @IsNotEmpty({message: 'Los goles del equipo 1 no puede estar vacio'})
    @IsInt({message:'Los goles del equipo 1 debe ser numero'})
    Goles_equipo_1: number;

    @IsNotEmpty({message: 'Los goles del eq uipo 2 no puede estar vacio'})
    @IsInt({message:'Los goles del equipo 2 debe ser numero'})
    Goles_equipo_2: number

    @IsNotEmpty({message: 'La observación no puede estar vacio'})
    @IsString({message: 'La observación debe ser un string'})
    Observacion_partido: string


}