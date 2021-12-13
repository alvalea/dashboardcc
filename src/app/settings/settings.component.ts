import { Component, OnInit } from '@angular/core';

import { ConfigService } from './config.service';
import { Configuration } from './configuration';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  configuration: Configuration = { key: 'key', value: 'value'};

  constructor(private configService: ConfigService) { }

  ngOnInit() {
	  this.configService.config().
		  subscribe(configuration =>
			    this.configuration = configuration);
  }

}
