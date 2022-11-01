//Se importa el modulo de la base de datos 
import { DataSource } from 'typeorm';
//se importa la tabla que usara la base de datos
import { Partidos } from '../entidades/partidos.entity'; 

export const Partidosprovider = [
  {
    provide: 'PARTIDOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Partidos),
    inject: ['DATA_SOURCE'],
  },
];