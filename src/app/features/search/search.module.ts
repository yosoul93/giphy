import { NgModule } from '@angular/core';

import { SearchDetailComponent } from './detail/detail.component';
import { SearchListComponent } from './list/list.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent
  ],
  imports: [    
  ],
  providers: []
})
export class MovieModule {
}
