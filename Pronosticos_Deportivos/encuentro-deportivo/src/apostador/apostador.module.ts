import { Module } from '@nestjs/common';
import { ApostadorController } from './apostador.controller';
import { ApostadorService } from './apostador.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApostadorSchema } from './schemas/apostador.schemas';

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
