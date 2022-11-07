import { Module } from '@nestjs/common';
import { MantenimientoController } from './mantenimiento.controller';
import { MantenimientoService } from './mantenimiento.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MantenimientoSchema } from './schema/mantenimiento.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Mantenimiento', schema: MantenimientoSchema },
    ]),
  ],
  controllers: [MantenimientoController],
  providers: [MantenimientoService],
})
export class MantenimientoModule {}
