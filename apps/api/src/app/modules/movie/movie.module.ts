import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../../entities';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
