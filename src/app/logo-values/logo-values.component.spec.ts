import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoValuesComponent } from './logo-values.component';

describe('LogoValuesComponent', () => {
  let component: LogoValuesComponent;
  let fixture: ComponentFixture<LogoValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
