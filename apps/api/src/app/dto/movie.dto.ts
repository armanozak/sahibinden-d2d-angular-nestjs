import { ApiModelProperty } from '@nestjs/swagger';
import { Movie } from '../entities/movie.entity';

export class MovieDto implements Movie {
  @ApiModelProperty()
  id: number;

  @ApiModelProperty()
  title: string;

  @ApiModelProperty()
  year: number;

  @ApiModelProperty()
  length: number;

  @ApiModelProperty()
  votes: number;

  @ApiModelProperty()
  rating: number;

  @ApiModelProperty()
  genre: string;
}
