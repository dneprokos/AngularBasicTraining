import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPofileComponent } from './github-pofile.component';

describe('GithubPofileComponent', () => {
  let component: GithubPofileComponent;
  let fixture: ComponentFixture<GithubPofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubPofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
