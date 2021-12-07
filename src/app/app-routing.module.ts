import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { TelemetryComponent } from './telemetry/telemetry.component';
import { CommandingComponent } from './commanding/commanding.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'telemetry', component: TelemetryComponent },
      { path: 'commanding', component: CommandingComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '',   redirectTo: '/telemetry', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
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
