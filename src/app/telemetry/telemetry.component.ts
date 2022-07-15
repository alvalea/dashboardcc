import { Component, OnInit } from '@angular/core';

import { HistoryService } from './history.service';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.css']
})
export class TelemetryComponent implements OnInit {

  history: string = '';

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {
  }

  getTM() {
	  this.historyService.history().
		  subscribe(history =>
			    this.history = JSON.stringify(history));
  }
}
