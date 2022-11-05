import { Module } from '@nestjs/common';
import { PronosticoController } from './pronostico.controller';
import { PronosticoService } from './pronostico.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PronosticoSchema } from './schemas/pronostico.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Pronostico', schema: PronosticoSchema}
    ])
  ],
  controllers: [PronosticoController],
  providers: [PronosticoService]
})
export class PronosticoModule {}