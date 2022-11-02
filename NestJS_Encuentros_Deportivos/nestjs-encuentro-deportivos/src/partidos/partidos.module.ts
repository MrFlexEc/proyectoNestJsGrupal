import { Module } from '@nestjs/common';
import { PartidosServicios } from './servicios/partidos.service';
import { PartidosController } from './controladores/partidos.controller';
import { Partidosprovider } from './proveedor/partidos.provider';
//Se importa la conexion a la base de datos 
import { DatabaseModule } from 'src/Database/database.modulo';
@Module({
  //hacer la conexión indicando que este módulo va a utilizar este dominio bajo la entidad Partidos
  imports:[DatabaseModule],
  providers: [...Partidosprovider, PartidosServicios],
  controllers: [PartidosController]
})
export class PartidosModule {}
