import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsortedTestComponentsComponent } from './unsorted-test-components.component';

describe('UnsortedTestComponentsComponent', () => {
  let component: UnsortedTestComponentsComponent;
  let fixture: ComponentFixture<UnsortedTestComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsortedTestComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsortedTestComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
