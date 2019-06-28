import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  migrationsTableName: `migrations_${process.env.DB_NAME}`,
  synchronize: false,
  migrationsRun: false,
  dropSchema: false,
  logging: process.env.NODE_ENV === 'production' ? false : true,
  cli: {
    entitiesDir: 'apps/api/src/app/entities',
    migrationsDir: 'apps/api/src/app/migrations',
  },
};

export default config;
