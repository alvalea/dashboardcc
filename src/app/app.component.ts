import { Component } from '@angular/core';

import { ConfigService } from './config.service';
import { Configuration } from './configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  configuration: Configuration = { key: 'key', value: 'value'};

  constructor(private configService: ConfigService) { }

  ngOnInit() {
	  this.configService.config().
		  subscribe(configuration =>
			    this.configuration = configuration);
  }
}
