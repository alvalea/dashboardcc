import { NgModule } from '@angular/core';

import { TelemetryRoutingModule } from './telemetry-routing.module';

import { TelemetryComponent } from './telemetry.component';

@NgModule({
  imports: [
    TelemetryRoutingModule
  ],
  declarations: [
    TelemetryComponent
  ]
})
export class TelemetryModule { }
