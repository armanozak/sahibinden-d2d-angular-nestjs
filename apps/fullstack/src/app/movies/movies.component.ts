import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fullstack-movies',
  template: `<fullstack-movie-list></fullstack-movie-list>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent {}
