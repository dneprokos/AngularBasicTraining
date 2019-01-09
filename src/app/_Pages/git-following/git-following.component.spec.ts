import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFollowingComponent } from './git-following.component';

describe('GitFollowingComponent', () => {
  let component: GitFollowingComponent;
  let fixture: ComponentFixture<GitFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
