import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';

import { CommandingComponent } from './commanding.component';
import { CommandService } from './command.service';
import { asyncData } from '../testing/async-observable-helpers';

describe('CommandingComponent', () => {
  let commandServiceSpy: jasmine.SpyObj<CommandService>;

  beforeEach(async () => {
	  commandServiceSpy = jasmine.createSpyObj('CommandService', ['loadCommand']);
	  commandServiceSpy.loadCommand.and.returnValue(asyncData('Command sent successfully'));

	  await TestBed.configureTestingModule({
		  imports: [ RouterTestingModule ],
		  declarations: [ CommandingComponent ],
		  providers: [
        FormBuilder,
        {provide: CommandService, useValue: commandServiceSpy}
      ]
	  }).compileComponents();
  });

  it('should create the commading', () => {
    const fixture = TestBed.createComponent(CommandingComponent);
    const settings = fixture.componentInstance;
    expect(settings).toBeTruthy();
  });
});
