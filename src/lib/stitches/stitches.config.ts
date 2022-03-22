// https://stitches.dev/docs/utils
import { RequireExactlyOne } from 'type-fest';
import { Property } from '@stitches/react/types/css';
import { gray } from '@radix-ui/colors';
import { CSSProperties, createStitches } from '@stitches/react';
import { long, short, soft } from '@/config/shadows';

export const {
  css,
  theme,
  config,
  styled,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: { ...gray },
    shadows: { soft, short, long },
  },
  utils: {
    bgColor: (backgroundColor: Property.BackgroundColor) => ({
      backgroundColor,
    }),
    linearGradient: (val: string) => ({
      backgroundImage: `linear-gradient(${val})`,
    }),
    size: (val: Property.Width | Property.Height) => {
      if (typeof val === 'string') {
        let [width, height] = val.trim().split(' ');
        height ??= width;
        return { width, height };
      }

      return { width: val, height: val };
    },
    rowSpan: (val: number) => ({ gridRow: `${val} span / auto` }),
    columnSpan: (val: number) => ({ gridColumn: `${val} span / auto` }),
    br: (borderRadius: Property.BorderRadius) => ({ borderRadius }),
    m: (margin: Property.Margin) => ({ margin }),
    mt: (marginTop: Property.MarginTop) => ({ marginTop }),
    mr: (marginRight: Property.MarginRight) => ({ marginRight }),
    mb: (marginBottom: Property.MarginBottom) => ({ marginBottom }),
    ml: (marginLeft: Property.MarginLeft) => ({ marginLeft }),
    mx: (val: Property.MarginInline) => {
      if (typeof val === 'string') {
        let [marginLeft, marginRight] = val.trim().split(' ');
        marginRight ??= marginLeft;
        return { marginLeft, marginRight };
      }

      return { marginLeft: val, marginRight: val };
    },
    my: (val: Property.MarginBlock) => {
      if (typeof val === 'string') {
        let [marginTop, marginBottom] = val.trim().split(' ');
        marginBottom ??= marginTop;
        return { marginTop, marginBottom };
      }

      return { marginTop: val, marginBottom: val };
    },
    p: (padding: Property.Padding) => ({ padding }),
    pt: (paddingTop: Property.PaddingTop) => ({ paddingTop }),
    pr: (paddingRight: Property.PaddingRight) => ({ paddingRight }),
    pb: (paddingBottom: Property.PaddingBottom) => ({ paddingBottom }),
    pl: (paddingLeft: Property.PaddingLeft) => ({ paddingLeft }),
    px: (val: Property.PaddingInline) => {
      if (typeof val === 'string') {
        let [paddingLeft, paddingRight] = val.trim().split(' ');
        paddingRight ??= paddingLeft;
        return { paddingLeft, paddingRight };
      }

      return { paddingLeft: val, paddingRight: val };
    },
    py: (val: Property.PaddingBlock) => {
      if (typeof val === 'string') {
        let [paddingTop, paddingBottom] = val.trim().split(' ');
        paddingBottom ??= paddingTop;
        return { paddingTop, paddingBottom };
      }

      return { paddingTop: val, paddingBottom: val };
    },
    resolveCSSProperties: (
      entries: (RequireExactlyOne<Record<keyof CSSProperties, unknown>> & {
        trueValue: string | number;
      })[]
    ) => {
      const cssPropValues = entries.reduce((prev, { trueValue, ...entry }) => {
        const [name, val] = Object.entries(entry).pop()!;
        const resolved =
          !val && val !== 0
            ? {}
            : val === true
            ? { [name]: trueValue }
            : { [name]: val };

        return { ...prev, ...resolved };
      }, {});

      return cssPropValues;
    },
  },
});

export const applyGlobalCSS = globalCss({
  html: {
    color: '$gray12',
    bgColor: '$gray1',
    minHeight: '-webkit-fill-available',
  },
  body: { minHeight: '100vh; min-height: -webkit-fill-available;' },
  '#__next > div': { minHeight: '100vh' },
});
