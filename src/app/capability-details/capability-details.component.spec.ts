import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityDetailsComponent } from './capability-details.component';

describe('CapabilityDetailsComponent', () => {
  let component: CapabilityDetailsComponent;
  let fixture: ComponentFixture<CapabilityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
