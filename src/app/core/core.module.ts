import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent, 
    NavbarComponent
  ],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule {}
