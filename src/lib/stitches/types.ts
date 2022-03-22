// https://stitches.dev/docs/typescript
import {
  CSSProperties,
  ComponentProps,
  PropertyValue,
  CSS as StitchesCSS,
} from '@stitches/react';
import { config, styled } from './stitches.config';

const StyledComponent = styled('div');
export type StyledComponentProps = ComponentProps<typeof StyledComponent>;
export type CSS = StitchesCSS<typeof config>;
export type CSSPropertyValue<T extends keyof CSSProperties> = PropertyValue<
  T,
  typeof config
>;
