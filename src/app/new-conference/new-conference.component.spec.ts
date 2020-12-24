import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConferenceComponent } from './new-conference.component';

describe('NewConferenceComponent', () => {
  let component: NewConferenceComponent;
  let fixture: ComponentFixture<NewConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
