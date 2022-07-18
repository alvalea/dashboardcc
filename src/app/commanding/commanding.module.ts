import { NgModule } from '@angular/core';

import { CommandingRoutingModule } from './commanding-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommandingComponent } from './commanding.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommandingRoutingModule
  ],
  declarations: [
    CommandingComponent
  ]
})
export class CommandingModule { }
