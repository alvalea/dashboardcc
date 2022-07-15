import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-commanding',
  templateUrl: './commanding.component.html',
  styleUrls: ['./commanding.component.css']
})
export class CommandingComponent implements OnInit {

	commandDocURL = environment.commandDocURL;

  constructor() { }

  ngOnInit(): void {
  }

}
