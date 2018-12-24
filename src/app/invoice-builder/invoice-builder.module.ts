import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [InvoiceBuilderComponent, MainContentComponent, SideNavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    InvoiceBuilderRoutingModule,
    MaterialModule
  ]
})
export class InvoiceBuilderModule { }
