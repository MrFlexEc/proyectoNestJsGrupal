//importamos las funciones para validar los datos
import { IsNotEmpty, IsString,MaxLength} from 'class-validator';

export class CrearModificarEquipo {
    @IsNotEmpty({message: 'El nombre no puede estar vacio'})
    @IsString({message: 'El nombre debe ser un string'})
    Nombre_equipo:string;

    @IsNotEmpty({message: 'La descripción no puede estar vacio'})
    @IsString({message: 'La descripción debe ser un string'})
    Descripcion_equipo: string;

    @IsNotEmpty({message: 'La serie no puede estar vacio'})
    @MaxLength(1,{message: 'La serie solo puede tener una letra'})
    @IsString({message: 'La serie debe ser un string'})
    Serie_equipo: string

}