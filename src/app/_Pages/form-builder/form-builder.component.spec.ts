import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderComponent } from './form-builder.component';
import { FormBuilder } from '@angular/forms';

describe('FormBuilderComponent', () => {
  let component: FormBuilderComponent;
  let fixture: ComponentFixture<FormBuilderComponent>;
  let componentFB: FormBuilderComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    componentFB = new FormBuilderComponent(new FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 3 controls', () => {
    expect(componentFB.form.contains('name')).toBeTruthy;
    expect(componentFB.form.contains('contact')).toBeTruthy;
    expect(componentFB.form.contains('topics')).toBeTruthy;
  });

  it('name control is required', () => {
    let control = componentFB.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
