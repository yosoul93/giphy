import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SearchDetailComponent } from './detail/detail.component';
import { SearchListComponent } from './list/list.component';
import { SearchComponent } from './search.component';

import { searchRoutes } from './search.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent
  ],
  imports: [    
    RouterModule.forChild(searchRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [SearchService]
})
export class SearchModule {
}
