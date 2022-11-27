import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyherComponent } from './glyher.component';

describe('GlyherComponent', () => {
  let component: GlyherComponent;
  let fixture: ComponentFixture<GlyherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlyherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlyherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
