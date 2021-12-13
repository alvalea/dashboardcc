import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';
import { Configuration } from './configuration';
import { asyncData } from '../testing/async-observable-helpers';

describe('ConfigService', () => {
  let configService: ConfigService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    let configuration: Configuration = { key: 'PROPAGATION_DELAY', value: '15' }
    httpClientSpy.get.and.returnValue(asyncData(configuration));

    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    configService = TestBed.inject(ConfigService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(configService).toBeTruthy();
  });

  it('should return 15', () => {
    configService.config().subscribe(
        configuration => expect(configuration.value).toEqual('15')
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
