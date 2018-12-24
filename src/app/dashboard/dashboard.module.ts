import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainContentComponent } from './component/main-content/main-content.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [DashboardComponent, MainContentComponent, SideNavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class InvoiceBuilderModule { }