import ormConfig from './src/app/typeorm.config';

const BASE_DIR = process.env.NODE_ENV === 'production' ? 'dist' : 'apps/api';

// @ts-ignore
export = {
  ...ormConfig,
  entities: [`${BASE_DIR}/**/*.entity{.ts,.js}`],
  migrations: [`${BASE_DIR}/**/migrations/**/*{.ts,.js}`],
};
