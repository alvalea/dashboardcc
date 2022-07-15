import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TelemetryRoutingModule } from './telemetry-routing.module';

import { TelemetryComponent } from './telemetry.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TelemetryRoutingModule
  ],
  declarations: [
    TelemetryComponent
  ]
})
export class TelemetryModule { }
