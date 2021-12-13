import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommandingComponent } from './commanding.component';

const commandingRoutes: Routes = [
  {
    path: '',
    component: CommandingComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(commandingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CommandingRoutingModule {}
