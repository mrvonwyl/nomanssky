import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Subject, takeUntil } from 'rxjs';

const MAX_INPUT_LENGTH = 16;
const GLYPH_CHARACTERS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

@Component({
  selector: 'app-glyher',
  templateUrl: './glyher.component.html',
  styleUrls: ['./glyher.component.scss'],
})
export class GlyherComponent implements OnInit, OnDestroy {
  glyphHexInput = new FormControl('');

  private readonly destroyed$ = new Subject();

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute;

    this.observeGlyphInput();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  private observeGlyphInput(): void {
    this.glyphHexInput.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        filter((glyphInput): glyphInput is string => {
          return !!glyphInput;
        }),
        map((glyphInput) => glyphInput.toUpperCase()),
        map((upperCaseGlyphInput) => {
          return upperCaseGlyphInput
            .split('')
            .filter((character) => {
              return GLYPH_CHARACTERS.includes(character);
            })
            .join('');
        }),
        map((sanitizedGlyphs) => {
          return sanitizedGlyphs.substring(0, MAX_INPUT_LENGTH - 1);
        })
      )

      .subscribe((sanitizedValue) => {
        this.glyphHexInput.patchValue(sanitizedValue, { emitEvent: false });
      });
  }
}
