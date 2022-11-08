import { Module } from '@nestjs/common';
import { DeportistaController } from './deportista.controller';
import { DeportistaService } from './deportista.service';
import { MongooseModule } from '@nestjs/mongoose';
import { deportistaSchema } from './schemas/deportista.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'deportista', schema: deportistaSchema}
    ])
  ],
  controllers: [DeportistaController],
  providers: [DeportistaService]
})
export class DeportistaModule {}
