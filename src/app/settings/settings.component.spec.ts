import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SettingsComponent } from './settings.component';

import { ConfigService } from './config.service'
import { Configuration } from './configuration'
import { asyncData } from '../testing/async-observable-helpers';

describe('SettingsComponent', () => {
  let configServiceSpy: jasmine.SpyObj<ConfigService>;

  beforeEach(async () => {
	  configServiceSpy = jasmine.createSpyObj('ConfigService', ['config']);

	  let configuration: Configuration = { key: 'PROPAGATION_DELAY', value: '15' }
	  configServiceSpy.config.and.returnValue(asyncData(configuration));

	  await TestBed.configureTestingModule({
		  imports: [ RouterTestingModule ],
		  declarations: [ SettingsComponent ],
		  providers: [ {provide: ConfigService, useValue: configServiceSpy}]
	  }).compileComponents();
  });

  it('should create the settings', () => {
    const fixture = TestBed.createComponent(SettingsComponent);
    const settings = fixture.componentInstance;
    expect(settings).toBeTruthy();
  });

  it(`should have as configuration.value 'value'`, () => {
    const fixture = TestBed.createComponent(SettingsComponent);
    const settings = fixture.componentInstance;
    expect(settings.configuration.value).toEqual('value');
  });

  it('should render Propagation', () => {
    const fixture = TestBed.createComponent(SettingsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Propagation');
  });
});
