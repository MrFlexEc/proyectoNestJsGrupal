//Importación de elementos necesarios (clases, liberías)
import { Module } from '@nestjs/common';
import { PronosticoController } from './pronostico.controller';
import { PronosticoService } from './pronostico.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PronosticoSchema } from './schemas/pronostico.schemas';

//Creación y designación de la entidad para conservar la información en mongoose
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