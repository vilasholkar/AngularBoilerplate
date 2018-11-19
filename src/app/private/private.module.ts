import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InternalService } from './service/internal/internal.service';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    NgbModule,
    SidebarModule,
    SharedModule
  ],
  declarations: [
    PrivateComponent,
    SidebarComponent,
    DashboardComponent
  ], providers: [
    InternalService
  ]
})
export class PrivateModule { }
