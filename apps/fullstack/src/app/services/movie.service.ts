import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '@fullstack/dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private readonly http: HttpClient) {}

  getMovieList() {
    return this.http.get<MovieDto[]>(environment.url.api + '/movies');
  }
}
