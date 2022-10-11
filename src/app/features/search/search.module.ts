import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchDetailComponent } from './detail/detail.component';
import { SearchListComponent } from './list/list.component';
import { SearchComponent } from './search.component';

import { searchRoutes } from './search.routing';

@NgModule({
  declarations: [
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent
  ],
  imports: [    
    RouterModule.forChild(searchRoutes),
  ],
  providers: []
})
export class SearchModule {
}
