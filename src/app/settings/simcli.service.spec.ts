import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { SimcliService } from './simcli.service';
import { Simcli } from './simcli';
import { asyncData } from '../testing/async-observable-helpers';

describe('SimcliService', () => {
  let simcliService: SimcliService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    let simcli: Simcli = { result: 'simcli' }
    httpClientSpy.get.and.returnValue(asyncData(simcli));

    TestBed.configureTestingModule({
      providers: [
        SimcliService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    simcliService = TestBed.inject(SimcliService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(simcliService).toBeTruthy();
  });

});
