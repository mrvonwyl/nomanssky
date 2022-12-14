import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { GlyphValue, GlyphValues } from 'src/app/models/glyph.models';

const MAX_INPUT_LENGTH = 12;

@Component({
  selector: 'app-glyher',
  templateUrl: './glyher.component.html',
  styleUrls: ['./glyher.component.scss'],
})
export class GlyherComponent implements OnInit, OnDestroy {
  GlyphValues = GlyphValues;
  glyphHexInput = new FormControl('');

  glyphHexOutput = '';

  private readonly destroyed$ = new Subject();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.observeGlyphRouteParam();
    this.observeGlyphInput();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  onGlyphButtonClick(event: GlyphValue): void {
    if (this.glyphHexOutput.length < MAX_INPUT_LENGTH) {
      this.glyphHexOutput = this.glyphHexOutput.concat(event);
    }
  }

  clearGlyphHexOutput(): void {
    this.glyphHexOutput = '';
  }
  deleteGlyphHexOutput(): void {
    this.glyphHexOutput = this.glyphHexOutput.substring(
      0,
      this.glyphHexOutput.length - 1
    );
  }

  private observeGlyphRouteParam(): void {
    this.activatedRoute.queryParams
      .pipe(
        takeUntil(this.destroyed$),
        map((queryParams) => {
          return queryParams['glyphs'];
        }),
        this.sanitizeGlyphInput()
      )
      .subscribe();
  }

  private observeGlyphInput(): void {
    this.glyphHexInput.valueChanges
      .pipe(takeUntil(this.destroyed$), this.sanitizeGlyphInput())
      .subscribe();

    this.glyphHexInput.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        filter((glyphInput) => {
          return !glyphInput;
        })
      )
      .subscribe(() => {
        this.router.navigate([]);
      });
  }

  private sanitizeGlyphInput() {
    return (
      glyphs: Observable<string | null | undefined>
    ): Observable<string> => {
      return glyphs.pipe(
        filter((glyphInput): glyphInput is string => {
          return !!glyphInput;
        }),
        map((glyphInput) => glyphInput.toUpperCase()),
        map((upperCaseGlyphInput) => {
          return upperCaseGlyphInput
            .split('')
            .filter((character) => {
              return GlyphValues.includes(character as GlyphValue);
            })
            .join('');
        }),
        map((sanitizedGlyphs) => {
          return sanitizedGlyphs.substring(0, MAX_INPUT_LENGTH);
        }),
        tap((sanitizedValue) => {
          this.glyphHexInput.patchValue(sanitizedValue, { emitEvent: false });

          this.router.navigate([], {
            queryParams: {
              glyphs: sanitizedValue,
            },
          });
        })
      );
    };
  }
}
