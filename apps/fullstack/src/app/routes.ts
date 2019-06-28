import { Route } from '@angular/router';

export interface NavLink {
  path: string;
  title: string;
}

export const APP_ROUTES: Route[] = [
  {
    path: 'movies',
    data: {
      title: 'Movies',
    },
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
  },
];
