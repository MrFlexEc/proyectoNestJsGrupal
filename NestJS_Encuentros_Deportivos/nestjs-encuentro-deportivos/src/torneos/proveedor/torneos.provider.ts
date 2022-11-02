//Se importa el módulo de la base de datos 
import { DataSource } from 'typeorm';
//se importa la tabla que usara la base de datos
import { Torneos } from '../entidades/torneos.entity';

export const Torneosprovider = [
  {
    provide: 'TORNEOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Torneos),
    inject: ['DATA_SOURCE'],
  },
];