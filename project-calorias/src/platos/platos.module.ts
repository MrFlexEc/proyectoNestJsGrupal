//importacion de librerias clases y metodos.
import { Module } from '@nestjs/common';
import { PlatosController } from './platos.controller';
import { PlatosService } from './platos.service';
import {MongooseModule} from '@nestjs/mongoose';
import {PlatosSchema} from './schemas/platos.schemas';

@Module({
  //creacion de la entidad platos dentro de mongodb.
  imports: [
    MongooseModule.forFeature([
      {name:'Platos',schema: PlatosSchema}
    ])
  ],
  controllers: [PlatosController],
  providers: [PlatosService]
})
export class PlatosModule {}
