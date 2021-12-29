import type { CSS as StitchesCSS } from '@stitches/react';
import { createStitches } from '@stitches/react';

export const {
  css,
  theme,
  config,
  styled,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  theme: { fonts: { system: 'system-ui' } },
  utils: {
    linearGradient: (val: string) => ({
      backgroundImage: `linear-gradient(${val})`,
    }),
    size: (val: string) => ({
      width: val,
      height: val,
    }),
    marginX: (val: string) => ({
      marginLeft: val,
      marginRight: val,
    }),
    marginY: (val: string) => ({
      marginTop: val,
      marginBottom: val,
    }),
    paddingX: (val: string) => ({
      paddingLeft: val,
      paddingRight: val,
    }),
    paddingY: (val: string) => ({
      paddingTop: val,
      paddingBottom: val,
    }),
  },
});

// https://stitches.dev/docs/typescript
export type CSS = StitchesCSS<typeof config>;
export type { VariantProps, PropertyValue, ScaleValue } from '@stitches/react';
