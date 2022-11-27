import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glyphs',
  templateUrl: './glyphs.component.html',
  styleUrls: ['./glyphs.component.scss'],
})
export class GlyphsComponent {
  @Input() glyphs!: string;
}
