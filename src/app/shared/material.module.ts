import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule,
  MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [],
  /* imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ], */
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
