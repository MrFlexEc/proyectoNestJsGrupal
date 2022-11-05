//Importación de elementos necesarios (clases, liberías)
import { Module } from '@nestjs/common';
import { EncuentroDeportivoController } from './encuentro_deportivo.controller';
import { EncuentroDeportivoService } from './encuentro_deportivo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EncuentroDeportivoSchema } from './schemas/encuentro_deportivo.schemas';

//Creación y designación de la entidad para conservar la información en mongoo
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'EncuentroDeportivo', schema: EncuentroDeportivoSchema}
    ])
  ],
  controllers: [EncuentroDeportivoController],
  providers: [EncuentroDeportivoService]
})
export class EncuentroDeportivoModule {}
