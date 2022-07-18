import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { CommandService } from './command.service';
import { asyncData } from '../testing/async-observable-helpers';

describe('CommandService', () => {
  let commandService: CommandService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    let response: string = 'Command sent successfully';
    httpClientSpy.get.and.returnValue(asyncData(response));

    TestBed.configureTestingModule({
      providers: [
        CommandService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    commandService = TestBed.inject(CommandService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(commandService).toBeTruthy();
  });

});
