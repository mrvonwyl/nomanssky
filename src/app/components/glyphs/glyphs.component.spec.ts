import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphsComponent } from './glyphs.component';

describe('GlyphsComponent', () => {
  let component: GlyphsComponent;
  let fixture: ComponentFixture<GlyphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlyphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlyphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
