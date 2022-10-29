import { Module } from '@nestjs/common';
import { TorneosService } from './servicios/torneos.service';
import { TorneosController } from './controladores/torneos.controller';

@Module({
  providers: [TorneosService],
  controllers: [TorneosController]
})
export class TorneosModule {}
