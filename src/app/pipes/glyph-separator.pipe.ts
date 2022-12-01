import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_CHUNK_SIZE = 3;

@Pipe({
  name: 'glyphSeparator',
})
export class GlyphSeparatorPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string[] {
    const regex = new RegExp(`.{1,${DEFAULT_CHUNK_SIZE}}`, 'g');

    return value.match(regex) ?? [];
  }
}
