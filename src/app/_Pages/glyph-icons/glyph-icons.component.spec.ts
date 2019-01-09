import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphIconsComponent } from './glyph-icons.component';

describe('GlyphIconsComponent', () => {
  let component: GlyphIconsComponent;
  let fixture: ComponentFixture<GlyphIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlyphIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlyphIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
