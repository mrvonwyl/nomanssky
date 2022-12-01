export type GlyphValue = typeof GlyphValues[number];

export type Glyph = {
  value: GlyphValue;
  name: string;
  legacyName: string;
};

export const GlyphValues = [
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
] as const;

export const Glyphs: Glyph[] = [
  { value: '0', name: 'Star Over Water', legacyName: 'sunset' },
  { value: '1', name: 'Hunter', legacyName: 'bird' },
  { value: '2', name: 'Reflection', legacyName: 'face' },
  { value: '3', name: 'Ancient Giant', legacyName: 'diplo' },
  { value: '4', name: 'Obscured Companion', legacyName: 'eclipse' },
  { value: '5', name: 'Ascending Orb', legacyName: 'balloon' },
  { value: '6', name: 'Sailor', legacyName: 'boat' },
  { value: '7', name: 'Lowly Insect', legacyName: 'bug' },
  { value: '8', name: 'Dragonfly', legacyName: 'dragonfly' },
  { value: '9', name: 'Spiral of Reality', legacyName: 'galaxy' },
  { value: 'A', name: 'Anomaly', legacyName: 'voxel' },
  { value: 'B', name: 'Ocean King', legacyName: 'fish' },
  { value: 'C', name: 'Tent', legacyName: 'tent' },
  { value: 'D', name: 'Vessel To Beyond', legacyName: 'rocket' },
  { value: 'E', name: 'Tree', legacyName: 'tree' },
  { value: 'F', name: 'Atlas', legacyName: 'atlas' },
];
