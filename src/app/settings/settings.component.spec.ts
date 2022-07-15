import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SettingsComponent } from './settings.component';

import { SimcliService } from './simcli.service';
import { Simcli } from './simcli';
import { ConfigService } from './config.service';
import { Configuration } from './configuration';
import { asyncData } from '../testing/async-observable-helpers';

describe('SettingsComponent', () => {
  let configServiceSpy: jasmine.SpyObj<ConfigService>;
  let simcliServiceSpy: jasmine.SpyObj<SimcliService>;

  beforeEach(async () => {
	  configServiceSpy = jasmine.createSpyObj('ConfigService', ['getConfig']);
	  let configuration: Configuration = { key: 'PROPAGATION_DELAY', value: '15' }
	  configServiceSpy.getConfig.and.returnValue(asyncData(configuration));

	  simcliServiceSpy = jasmine.createSpyObj('SimcliService', ['startTM', 'stopTM']);
	  let simcliResponse: Simcli = { result: 'simcli response' };
	  simcliServiceSpy.startTM.and.returnValue(asyncData(simcliResponse));
	  simcliServiceSpy.stopTM.and.returnValue(asyncData(simcliResponse));

	  await TestBed.configureTestingModule({
		  imports: [ RouterTestingModule ],
		  declarations: [ SettingsComponent ],
		  providers: [
        {provide: ConfigService, useValue: configServiceSpy},
        {provide: SimcliService, useValue: simcliServiceSpy}
      ]
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
    expect(compiled.querySelector('#propagation').textContent).toContain('Propagation');
  });
});
