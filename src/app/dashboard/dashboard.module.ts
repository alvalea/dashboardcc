import { NgModule } from '@angular/core';

import { AuthModule } from '../auth/auth.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
		AuthModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
