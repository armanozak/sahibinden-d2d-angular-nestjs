import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { MovieDto } from '@fullstack/dto';
import { merge, Observable } from 'rxjs';
import { map, shareReplay, withLatestFrom } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';

export class MovieListDataSource extends DataSource<MovieDto> {
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private movieService: MovieService) {
    super();
  }

  connect(): Observable<MovieDto[]> {
    const data$ = this.movieService
      .getMovieList()
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));

    return merge(data$, this.paginator.page, this.sort.sortChange).pipe(
      withLatestFrom(data$, (_, data) => {
        this.paginator.length = data.length;
        return data;
      }),
      map(data => this.getPagedData(this.getSortedData([...data]))),
    );
  }

  disconnect() {}

  private getPagedData(data: MovieDto[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: MovieDto[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    const direction = this.sort.direction === 'asc' ? 1 : -1;
    const prop = this.sort.active;
    const compare = prop === 'title' ? compareText : compareNumeric;

    return data.sort((a, b) => compare(a[prop], b[prop], direction));
  }
}

function compareNumeric(a: number, b: number, direction: number): number {
  return (a < b ? -1 : 1) * direction;
}

function compareText(a: string, b: string, direction: number): number {
  return (a.toLowerCase() < b.toLowerCase() ? -1 : 1) * direction;
}
