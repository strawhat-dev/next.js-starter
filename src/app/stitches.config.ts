import { CSS as StitchesCSS, createStitches } from '@stitches/react';
import { Property } from '@stitches/react/types/css';

// https://stitches.dev/docs/utils
export const {
  css,
  theme,
  config,
  styled,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  utils: {
    m: (val: Property.Margin) => ({ margin: val }),
    mx: (val: Property.Margin) => ({ marginLeft: val, marginRight: val }),
    my: (val: Property.Margin) => ({ marginTop: val, marginBottom: val }),
    mt: (val: Property.MarginTop) => ({ marginTop: val }),
    mb: (val: Property.MarginBottom) => ({ marginBottom: val }),
    ml: (val: Property.MarginLeft) => ({ marginLeft: val }),
    mr: (val: Property.MarginRight) => ({ marginRight: val }),
    p: (val: Property.Padding) => ({ padding: val }),
    px: (val: Property.Padding) => ({ paddingLeft: val, paddingRight: val }),
    py: (val: Property.Padding) => ({ paddingTop: val, paddingBottom: val }),
    pt: (val: Property.PaddingTop) => ({ paddingTop: val }),
    pb: (val: Property.PaddingBottom) => ({ paddingBottom: val }),
    pl: (val: Property.PaddingLeft) => ({ paddingLeft: val }),
    pr: (val: Property.PaddingRight) => ({ paddingRight: val }),
    br: (val: Property.BorderRadius) => ({ borderRadius: val }),
    linearGradient: (val: string) => ({
      backgroundImage: `linear-gradient(${val})`,
    }),
    size: (val: Property.Width | Property.Height) => ({
      width: val,
      height: val,
    }),
  },
});

// https://stitches.dev/docs/typescript
export type CSS = StitchesCSS<typeof config>;
