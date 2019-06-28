import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_ROUTES, NavLink } from '../routes';

@Component({
  selector: 'fullstack-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.css']
})
export class LayoutMainComponent {
  menu: NavLink[] = APP_ROUTES.map(({path, data: {title}}) => ({path, title}));

  trackByFn: TrackByFunction<NavLink> = (_, item) => item.path;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
