import { Component, OnInit } from '@angular/core';

import { ConfigService } from './config.service';
import { SimcliService } from './simcli.service';
import { Configuration } from './configuration';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private propDelay: string = 'PROPAGATION_DELAY';

  configuration: Configuration = { key: 'key', value: 'value'};

  simcli: string = '';

  constructor(private configService: ConfigService,
              private simcliService: SimcliService) { }

  ngOnInit() {
	  this.configService.getConfig(this.propDelay).
		  subscribe(configuration =>
			    this.configuration = configuration);
  }

  startTM() {
	  this.simcliService.startTM().
		  subscribe(simcli =>
			    this.simcli = simcli.result);
  }

  stopTM() {
	  this.simcliService.stopTM().
		  subscribe(simcli =>
			    this.simcli = simcli.result);
  }
}
