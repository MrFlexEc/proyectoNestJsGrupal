import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    AutosModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:jajasalu2@cluster0.hobrkqe.mongodb.net/test',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
