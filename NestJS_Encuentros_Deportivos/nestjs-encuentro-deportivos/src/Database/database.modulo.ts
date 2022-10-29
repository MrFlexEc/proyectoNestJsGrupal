//se importa la conexión de la base de datos al modulo
import { Module } from '@nestjs/common';
import { DatabaseED } from './database'; 

@Module({
  providers: [...DatabaseED],
  exports: [...DatabaseED],
})
export class DatabaseModule {}