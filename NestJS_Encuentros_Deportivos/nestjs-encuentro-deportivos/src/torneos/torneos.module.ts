import { Module } from '@nestjs/common';
import { TorneosServicios } from './servicios/torneos.service';
import { TorneosController } from './controladores/torneos.controller';
import { Torneosprovider } from './proveedor/torneos.provider';
//Se importa la conexion a la base de datos 
import { DatabaseModule } from 'src/Database/database.modulo';

@Module({
  //hacer la conexión indicando que este módulo va a utilizar este dominio bajo la entidad Partidos
  imports:[DatabaseModule],
  providers: [...Torneosprovider,TorneosServicios],
  controllers: [TorneosController]
})
export class TorneosModule {}
