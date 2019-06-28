import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Route[] = [
  {
    path: '',
    component: MoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
