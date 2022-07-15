import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { asyncData } from '../testing/async-observable-helpers';

import { HistoryService } from './history.service';

describe('HistoryService', () => {
  let historyService: HistoryService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    let tm: string = '';
    httpClientSpy.get.and.returnValue(asyncData(tm));

    TestBed.configureTestingModule({
      providers: [
        HistoryService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    historyService = TestBed.inject(HistoryService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });


  it('should be created', () => {
    expect(historyService).toBeTruthy();
  });
});
