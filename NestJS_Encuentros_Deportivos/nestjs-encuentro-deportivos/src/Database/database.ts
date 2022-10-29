//Se importa la libreria DataSource para crear la conexión de la base de datos
import { DataSource } from 'typeorm';

export const DatabaseED = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: '34.151.200.26',
        port: 5432,
        username: 'postgres',
        password: 'Xavier1802',
        database: 'encuentros_Deportivos',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true
        
      });

      return dataSource.initialize();
    },
  },
];