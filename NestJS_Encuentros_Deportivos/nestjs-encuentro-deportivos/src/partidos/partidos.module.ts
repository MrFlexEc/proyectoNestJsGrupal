import { Module } from '@nestjs/common';
import { PartidosServicios } from './servicios/partidos.service';
import { PartidosController } from './controladores/partidos.controller';
import { Partidosprovider } from './proveedor/partidos.provider';
//Se importa la conexion a la base de datos 
import { DatabaseModule } from 'src/Database/database.modulo';
@Module({
  imports:[DatabaseModule],
  providers: [...Partidosprovider, PartidosServicios],
  controllers: [PartidosController]
})
export class PartidosModule {}
