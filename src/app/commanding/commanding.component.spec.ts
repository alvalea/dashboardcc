import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandingComponent } from './commanding.component';

describe('CommandingComponent', () => {
  let component: CommandingComponent;
  let fixture: ComponentFixture<CommandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
