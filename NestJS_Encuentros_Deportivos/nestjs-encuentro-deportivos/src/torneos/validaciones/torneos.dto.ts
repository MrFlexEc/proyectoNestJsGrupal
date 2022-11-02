//importamos las funciones para validar los datos
import { IsNotEmpty, IsString} from 'class-validator';

export class CrearModificarTorneo {
  @IsNotEmpty({message:"La descricpción no puede estar vacia"})
  @IsString({message:"La descricpción debe ser un string"})
  Descripcion_torneo:string;
}





