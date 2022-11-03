//importacion de las ramas y librerias
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatosModule } from './platos/platos.module';
import {MongooseModule} from '@nestjs/mongoose';
import { RegistrosModule } from './registros/registros.module';
import { PacientesModule } from './pacientes/pacientes.module';

//modulo priincipal contiene la URL de la base de datos de mongodb atlas.
@Module({
  //importacion de cada modulo de las entidades creada, PLATOS, PACIENTE,REGISTRO
  //conexion a la base de datos mongodb atlas.
  imports: [PlatosModule,MongooseModule.forRoot('mongodb+srv://Moreno:105822moreno@atlascluster.nncabhx.mongodb.net/test'), RegistrosModule, PacientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
