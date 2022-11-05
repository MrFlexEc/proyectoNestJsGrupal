import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApostadorModule } from './apostador/apostador.module';
import { MongooseModule } from '@nestjs/mongoose'
import { EncuentroDeportivoModule } from './encuentro_deportivo/encuentro_deportivo.module';
import { PronosticoModule } from './pronostico/pronostico.module';


//Hago uso de la base de datos de un compañero de grupo por un fallo en la mía
@Module({
  imports: [ApostadorModule, MongooseModule.forRoot('mongodb+srv://Moreno:105822moreno@atlascluster.nncabhx.mongodb.net/test'), EncuentroDeportivoModule, PronosticoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
