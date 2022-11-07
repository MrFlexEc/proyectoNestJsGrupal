import { Module } from '@nestjs/common';
import { MantenimientoController } from './mantenimiento.controller';
import { MantenimientoService } from './mantenimiento.service';

@Module({
  controllers: [MantenimientoController],
  providers: [MantenimientoService],
})
export class MantenimientoModule {}
