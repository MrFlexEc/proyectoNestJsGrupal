import { Module } from '@nestjs/common';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { AutosSchema } from './schemas/autos.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Autos', schema: AutosSchema }]),
  ],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
