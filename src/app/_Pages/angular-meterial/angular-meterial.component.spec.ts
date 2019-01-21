import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMeterialComponent } from './angular-meterial.component';

describe('AngularMeterialComponent', () => {
  let component: AngularMeterialComponent;
  let fixture: ComponentFixture<AngularMeterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMeterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMeterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
