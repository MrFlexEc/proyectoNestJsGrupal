import { Module } from '@nestjs/common';
import { PlatosController } from './platos.controller';
import { PlatosService } from './platos.service';
import {MongooseModule} from '@nestjs/mongoose';
import {PlatosSchema} from './schemas/platos.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Platos',schema: PlatosSchema}
    ])
  ],
  controllers: [PlatosController],
  providers: [PlatosService]
})
export class PlatosModule {}
