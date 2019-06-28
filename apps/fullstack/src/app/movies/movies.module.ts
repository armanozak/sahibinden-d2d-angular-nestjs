import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [MoviesComponent, MovieListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
