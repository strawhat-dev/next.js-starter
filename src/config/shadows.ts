export type DropShadow = keyof typeof DropShadows;

export const DropShadows = {
  $drop: '1px 2px 4px $colors$blackA8',
  $blur: '0 0 0.75rem $colors$blackA8',
  $shift: '0.35rem 0.35rem 0.4rem $colors$blackA8',
} as const;

export const sm = [
  '0 1px 1px $colors$blackA6',
  '0 2px 2px $colors$blackA6',
  '0 4px 4px $colors$blackA6',
  '0 6px 8px $colors$blackA6',
  '0 8px 16px $colors$blackA6',
].join(',');

export const lg = [
  '0 2px 1px $colors$blackA5',
  '0 4px 2px $colors$blackA5',
  '0 8px 4px $colors$blackA5',
  '0 16px 8px $colors$blackA5',
  '0 32px 16px $colors$blackA5',
].join(',');

export const soft = [
  '0 1px 2px $colors$blackA4',
  '0 2px 4px $colors$blackA4',
  '0 4px 8px $colors$blackA4',
  '0 8px 16px $colors$blackA4',
  '0 16px 32px $colors$blackA4',
  '0 32px 64px $colors$blackA4',
].join(',');
