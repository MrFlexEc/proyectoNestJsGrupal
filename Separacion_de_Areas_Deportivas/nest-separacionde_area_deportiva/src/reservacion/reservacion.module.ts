import { Module } from '@nestjs/common';
import { ReservacionController } from './reservacion.controller';
import { ReservacionService } from './reservacion.service';
import { MongooseModule } from '@nestjs/mongoose';
import { reservacionSchema } from './schemas/reservacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'reservacion', schema: reservacionSchema}
    ])
  ],
  controllers: [ReservacionController],
  providers: [ReservacionService]
})
export class ReservacionModule {}
