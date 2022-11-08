//Importacion de librerias, clases, servicios e interfaces necesarias 
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanchaModule } from './cancha/cancha.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DeportistaModule } from './deportista/deportista.module';
import { ReservacionModule } from './reservacion/reservacion.module';

//conexión a base de datos
@Module({
  imports: [CanchaModule, MongooseModule.forRoot('mongodb+srv://ernesto:eB1317057451@cluster0.uaw7ovj.mongodb.net/nestjs-SAD'), DeportistaModule, ReservacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
