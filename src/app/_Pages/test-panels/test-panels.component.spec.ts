import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPanelsComponent } from './test-panels.component';

describe('TestPanelsComponent', () => {
  let component: TestPanelsComponent;
  let fixture: ComponentFixture<TestPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
