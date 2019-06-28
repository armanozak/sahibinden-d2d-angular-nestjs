import { MovieDto } from '@fullstack/dto';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  @ApiOkResponse({ type: [MovieDto] })
  getAll(): Promise<MovieDto[]> {
    return this.movieService.getAll();
  }
}
