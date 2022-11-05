//Importación de elementos necesarios (clases, liberías)
import { Module } from '@nestjs/common';
import { ApostadorController } from './apostador.controller';
import { ApostadorService } from './apostador.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApostadorSchema } from './schemas/apostador.schemas';

//Creación y designación de la entidad para conservar la información en mongoo
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Apostador', schema: ApostadorSchema}
    ])
  ],
  controllers: [ApostadorController],
  providers: [ApostadorService]
})
export class ApostadorModule {}
