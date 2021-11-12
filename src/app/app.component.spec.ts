import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { ConfigService } from './config.service'
import { Configuration } from './configuration'
import { asyncData } from './testing/async-observable-helpers';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

describe('AppComponent', () => {
  let configServiceSpy: jasmine.SpyObj<ConfigService>;

  beforeEach(async () => {
	  configServiceSpy = jasmine.createSpyObj('ConfigService', ['config']);

	  let configuration: Configuration = { key: 'PROPAGATION_DELAY', value: '15' }
	  configServiceSpy.config.and.returnValue(asyncData(configuration));

	  await TestBed.configureTestingModule({
		  declarations: [ AppComponent ],
		  imports: [
			  BrowserAnimationsModule,
			  MatTabsModule
		  ],
		  providers: [ {provide: ConfigService, useValue: configServiceSpy}]
	  }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as configuration.value 'value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.configuration.value).toEqual('value');
  });

  it('should render Propagation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Propagation');
  });
});
