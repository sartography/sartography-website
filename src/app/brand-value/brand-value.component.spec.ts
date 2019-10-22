import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandValueComponent } from './brand-value.component';

describe('BrandValueComponent', () => {
  let component: BrandValueComponent;
  let fixture: ComponentFixture<BrandValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
