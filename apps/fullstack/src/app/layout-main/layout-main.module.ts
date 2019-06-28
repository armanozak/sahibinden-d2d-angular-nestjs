import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from '../routes';
import { LayoutMainComponent } from './layout-main.component';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutMainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: APP_ROUTES[0].path,
          },
          ...APP_ROUTES,
          {
            path: '**',
            redirectTo: APP_ROUTES[0].path,
          }
        ]
      }
    ]),
  ],
  exports: [RouterModule]
})
export class LayoutMainModule { }
