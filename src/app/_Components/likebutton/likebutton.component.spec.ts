import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from "@angular/platform-browser";
import { LikebuttonComponent } from './likebutton.component';

describe('LikebuttonComponent', () => {
  let component: LikebuttonComponent;
  let fixture: ComponentFixture<LikebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Initial count should be', () => {

    //Detects environment changes
    fixture.detectChanges();

    //Find element by css 
    let elSelector = '.ng-star-inserted span:nth-child(3)';
    let de = fixture.debugElement.query(By.css(elSelector));

    //convert element as HTML element
    let el: HTMLElement = de.nativeElement;

    //Assert element should contain value 10
    expect(el.innerText).toContain('10');

  });
});
