import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { GlyphValue } from 'src/app/models/glyph.models';

@Component({
  selector: 'app-glyph-button',
  templateUrl: './glyph-button.component.html',
  styleUrls: ['./glyph-button.component.scss'],
})
export class GlyphButtonComponent {
  @Input() glyph!: GlyphValue;

  @Output() clicked = new EventEmitter<GlyphValue>();

  @HostListener('click')
  onClick() {
    this.clicked.emit(this.glyph);
  }
}
