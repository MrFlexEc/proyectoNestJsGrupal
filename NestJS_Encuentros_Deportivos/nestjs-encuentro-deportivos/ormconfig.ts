import { DataSource } from "typeorm";
export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: '34.151.200.26',
    port: 5432,
    username: 'postgres',
    password: 'Xavier1802',
    database: 'encuentros_deportivos',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
});