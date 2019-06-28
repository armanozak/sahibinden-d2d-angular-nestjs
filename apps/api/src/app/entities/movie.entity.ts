import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Index('index_movies_on_title', ['title'])
@Unique('unique_movie_title_year', ['title', 'year'])
@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 200 })
  title: string;

  @Column('int4')
  year: number;

  @Column('int4')
  length: number;

  @Column('float8')
  votes: number;

  @Column('float8')
  rating: number;

  @Column('varchar', { length: 16 })
  genre: string;
}
