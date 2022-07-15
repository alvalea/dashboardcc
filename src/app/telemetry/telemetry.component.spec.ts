import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TelemetryComponent } from './telemetry.component';

import { HistoryService } from './history.service';
import { asyncData } from '../testing/async-observable-helpers';

describe('TelemetryComponent', () => {
  let historyServiceSpy: jasmine.SpyObj<HistoryService>;

  beforeEach(async () => {
	  historyServiceSpy = jasmine.createSpyObj('HistoryService', ['history']);

	  let history: string = 'tm';
	  historyServiceSpy.history.and.returnValue(asyncData(history));

	  await TestBed.configureTestingModule({
		  imports: [ RouterTestingModule ],
		  declarations: [ TelemetryComponent ],
		  providers: [ {provide: HistoryService, useValue: historyServiceSpy}]
	  }).compileComponents();
  });

  it('should create the telemetry', () => {
    const fixture = TestBed.createComponent(TelemetryComponent);
    const telemetry = fixture.componentInstance;
    expect(telemetry).toBeTruthy();
  });
});
