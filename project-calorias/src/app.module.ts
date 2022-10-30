import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatosModule } from './platos/platos.module';
import {MongooseModule} from '@nestjs/mongoose';
import { RegistrosModule } from './registros/registros.module';

@Module({
  imports: [PlatosModule,MongooseModule.forRoot('mongodb+srv://Moreno:105822moreno@atlascluster.nncabhx.mongodb.net/test'), RegistrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
