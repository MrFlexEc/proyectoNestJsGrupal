//importacion de librerias
import { Module } from '@nestjs/common';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service';
import {MongooseModule} from '@nestjs/mongoose';
import { PacienteSchema } from './schemas/pacientes.schemas';

@Module({
  //creacion del nombre de la entidad en la base de datos.
  imports: [
    MongooseModule.forFeature([
      {name:'Pacientes',schema: PacienteSchema}
    ])
  ],
  controllers: [PacientesController],
  providers: [PacientesService]
})
export class PacientesModule {}
