import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelemetryComponent } from './telemetry/telemetry.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'telemetry', component: TelemetryComponent },
  { path: '',   redirectTo: '/telemetry', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
