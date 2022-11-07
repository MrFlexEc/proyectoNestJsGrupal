//importamos las funciones para validar los datos
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString} from 'class-validator';

export class CrearModificarTorneo {

  @ApiProperty()
  @IsNotEmpty({message:"La descricpción no puede estar vacia"})
  @IsString({message:"La descricpción debe ser un string"})
  Descripcion_torneo:string;
}





