import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelemetryComponent } from './telemetry.component';

const telemetryRoutes: Routes = [
  {
    path: '',
    component: TelemetryComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(telemetryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TelemetryRoutingModule {}
