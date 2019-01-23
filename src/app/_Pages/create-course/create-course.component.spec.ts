import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseComponent } from './create-course.component';

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain default categories', () => {
    let categoryNames = component.courseCategories.map(c => c.name);
    let expectedNames = ['Development', 'Art', 'Languages'];
    
    expectedNames.forEach(name => {
      expect(categoryNames).toContain(name);
    });   
  });
});
