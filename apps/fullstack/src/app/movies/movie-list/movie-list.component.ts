import { AfterViewInit, Component, TrackByFunction, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { MovieDto } from '@fullstack/dto';
import { MovieService } from '../../services/movie.service';
import { MovieListDataSource } from './movie-list-datasource';

@Component({
  selector: 'fullstack-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<MovieDto>;

  dataSource: MovieListDataSource;

  displayedColumns = ['id', 'title', 'year', 'rating'];

  trackByFn: TrackByFunction<string> = (_, prop) => prop;

  constructor(private movieService: MovieService) {}

  ngAfterViewInit() {
    this.dataSource = new MovieListDataSource(this.movieService);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
