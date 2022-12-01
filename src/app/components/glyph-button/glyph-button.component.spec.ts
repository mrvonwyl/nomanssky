import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphButtonComponent } from './glyph-button.component';

describe('GlyphButtonComponent', () => {
  let component: GlyphButtonComponent;
  let fixture: ComponentFixture<GlyphButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlyphButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlyphButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
