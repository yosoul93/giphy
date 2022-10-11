import { Route } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchDetailComponent } from './detail/detail.component';

export const searchRoutes: Route[] = [  
  {
    path      : '',
    pathMatch : 'full',
    redirectTo: 'search'
  },
  {
    path     : 'search',
    component: SearchComponent,
    children : [
      {
        path     : 'detail/:id',
        component: SearchDetailComponent,
      },
    ]
  },
];
