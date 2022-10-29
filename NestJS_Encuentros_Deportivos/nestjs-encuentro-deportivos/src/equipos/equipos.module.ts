import { Module } from '@nestjs/common';
import { EquiposService } from './servicios/equipos.service';
import { EquiposController } from './controladores/equipos.controller';

@Module({
  providers: [EquiposService],
  controllers: [EquiposController]
})
export class EquiposModule {}
