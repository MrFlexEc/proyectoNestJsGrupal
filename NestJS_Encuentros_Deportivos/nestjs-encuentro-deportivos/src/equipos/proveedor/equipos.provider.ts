//Se importa el módulo de la base de datos 
import { DataSource } from 'typeorm';
//se importa la tabla que usara la base de datos
import { Equipos } from '../entidades/equipos.entity';  

export const Equiposprovider = [
  {
    provide: 'EQUIPOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Equipos),
    inject: ['DATA_SOURCE'],
  },
];