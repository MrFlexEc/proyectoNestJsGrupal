import { Module } from '@nestjs/common';
import { ConceptoController } from './concepto.controller';
import { ConceptoService } from './concepto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoSchema } from './schema/concepto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Concepto', schema: ConceptoSchema }]),
  ],
  controllers: [ConceptoController],
  providers: [ConceptoService],
})
export class ConceptoModule {}
