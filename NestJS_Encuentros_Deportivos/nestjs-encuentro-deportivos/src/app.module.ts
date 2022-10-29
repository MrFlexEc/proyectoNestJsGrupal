import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { TorneosModule } from './torneos/torneos.module';
import { PartidosModule } from './partidos/partidos.module';


@Module({
  imports: [EquiposModule, TorneosModule, PartidosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
