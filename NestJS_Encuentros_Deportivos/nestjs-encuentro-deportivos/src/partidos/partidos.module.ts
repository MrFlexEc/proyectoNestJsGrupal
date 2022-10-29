import { Module } from '@nestjs/common';
import { PartidosService } from './servicios/partidos.service';
import { PartidosController } from './controladores/partidos.controller';

@Module({
  providers: [PartidosService],
  controllers: [PartidosController]
})
export class PartidosModule {}
