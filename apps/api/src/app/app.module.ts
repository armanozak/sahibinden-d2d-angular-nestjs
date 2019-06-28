import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './modules/movie/movie.module';
import ormConfig from './typeorm.config';
import { entities, migrations } from './typeorm.fix';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      entities,
      migrations,
    }),

    MovieModule,
  ],
})
export class AppModule {}
