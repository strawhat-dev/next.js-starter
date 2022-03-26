// https://stitches.dev/docs/utils
import { LiteralUnion, RequireExactlyOne, ValueOf } from 'type-fest';
import { Property } from '@stitches/react/types/css';
import { ComponentProps } from 'react';
import { blackA, gray, grayA } from '@radix-ui/colors';
import {
  CSSProperties,
  PropertyValue,
  CSS as StitchesCSS,
  createStitches,
} from '@stitches/react';
import { DropShadow, DropShadows, lg, sm, soft } from '@/config/shadows';

export type CSS = StitchesCSS<typeof config>;
export type StyledComponentProps = ComponentProps<typeof StyledComponent>;

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
    colors: { ...gray, ...grayA, ...blackA },
    shadows: { soft, sm, lg },
  },
  utils: {
    m: (margin: PropertyValue<'margin'>) => ({ margin }),
    mt: (marginTop: PropertyValue<'marginTop'>) => ({ marginTop }),
    mr: (marginRight: PropertyValue<'marginRight'>) => ({ marginRight }),
    mb: (marginBottom: PropertyValue<'marginBottom'>) => ({ marginBottom }),
    ml: (marginLeft: PropertyValue<'marginLeft'>) => ({ marginLeft }),
    mx: (val: PropertyValue<'marginInline'> | string) => {
      if (typeof val === 'string') {
        let [marginLeft, marginRight] = val.trim().split(' ');
        marginRight ??= marginLeft;
        return { marginLeft, marginRight };
      }

      return { marginLeft: val, marginRight: val };
    },
    my: (val: PropertyValue<'marginBlock'> | string) => {
      if (typeof val === 'string') {
        let [marginTop, marginBottom] = val.trim().split(' ');
        marginBottom ??= marginTop;
        return { marginTop, marginBottom };
      }

      return { marginTop: val, marginBottom: val };
    },

    p: (padding: PropertyValue<'padding'>) => ({ padding }),
    pt: (paddingTop: PropertyValue<'paddingTop'>) => ({ paddingTop }),
    pr: (paddingRight: PropertyValue<'paddingRight'>) => ({ paddingRight }),
    pb: (paddingBottom: PropertyValue<'paddingBottom'>) => ({ paddingBottom }),
    pl: (paddingLeft: PropertyValue<'paddingLeft'>) => ({ paddingLeft }),
    px: (val: PropertyValue<'paddingInline'> | string) => {
      if (typeof val === 'string') {
        let [paddingLeft, paddingRight] = val.trim().split(' ');
        paddingRight ??= paddingLeft;
        return { paddingLeft, paddingRight };
      }

      return { paddingLeft: val, paddingRight: val };
    },
    py: (val: PropertyValue<'paddingBlock'> | string) => {
      if (typeof val === 'string') {
        let [paddingTop, paddingBottom] = val.trim().split(' ');
        paddingBottom ??= paddingTop;
        return { paddingTop, paddingBottom };
      }

      return { paddingTop: val, paddingBottom: val };
    },

    br: (borderRadius: PropertyValue<'borderRadius'>) => ({ borderRadius }),
    rowSpan: (val: number) => ({ gridRow: `${val} span / auto` }),
    columnSpan: (val: number) => ({ gridColumn: `${val} span / auto` }),
    bgColor: (backgroundColor: PropertyValue<'backgroundColor'>) => ({
      backgroundColor,
    }),
    linearGradient: (val: string) => ({
      backgroundImage: `linear-gradient(${val})`,
    }),
    size: (val: PropertyValue<'width'> | PropertyValue<'height'> | string) => {
      if (typeof val === 'string') {
        let [width, height] = val.trim().split(' ');
        height ??= width;
        return { width, height };
      }

      return { width: val, height: val };
    },
    shadow: (
      val:
        | [DropShadow, Property.Color]
        | DropShadow
        | PropertyValue<'boxShadow'>
    ) => {
      let shadow;
      if (Array.isArray(val)) {
        const [token, color] = val;
        shadow = DropShadows[token].replace(
          /\$(.*)/,
          color.startsWith('$') ? `$colors${color}` : color
        );
      }

      shadow ??= DropShadows[val as DropShadow];
      shadow ??= val;
      return { filter: `drop-shadow(${shadow})` };
    },

    resolveCSSProperties: (
      entries: (RequireExactlyOne<
        Record<LiteralUnion<keyof CSSProperties, string>, unknown>
      > & {
        trueValue: ValueOf<CSSProperties>;
      })[]
    ) =>
      entries.reduce((prev, { trueValue, ...entry }) => {
        const [name, val] = Object.entries(entry).pop()!;
        const resolved =
          !val && val !== 0
            ? {}
            : val === true
            ? { [name]: trueValue }
            : { [name]: val };

        return { ...prev, ...resolved };
      }, {}),
  },
});

export const applyGlobalCSS = globalCss({
  html: {
    color: '$gray12',
    bgColor: '$gray1',
    height: '-webkit-fill-available',
  },
  body: { minHeight: '100vh; min-height: -webkit-fill-available;' },
  '#__next > div': { minHeight: '100vh' },
});

export const StyledComponent = styled('div');
