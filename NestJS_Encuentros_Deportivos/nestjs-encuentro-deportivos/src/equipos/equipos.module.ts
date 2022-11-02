import { Module } from '@nestjs/common';
import { EquiposServicios } from './servicios/equipos.service';
import { EquiposController } from './controladores/equipos.controller';
import { Equiposprovider } from './proveedor/equipos.provider';
//Se importa la conexion a la base de datos 
import { DatabaseModule } from 'src/Database/database.modulo';

@Module({
  //hacer la conexión indicando que este módulo va a utilizar este dominio bajo la entidad Equipos
  imports:[DatabaseModule],
  providers: [...Equiposprovider,EquiposServicios],
  controllers: [EquiposController]
})
export class EquiposModule {}
