// https://stitches.dev/docs/utils
// https://stitches.dev/docs/typescript
import { RequireExactlyOne } from 'type-fest';
import { Property } from '@stitches/react/types/css';
import {
  CSSProperties,
  PropertyValue,
  CSS as StitchesCSS,
  createStitches,
} from '@stitches/react';

export type CSS = StitchesCSS<typeof config>;
export type CSSPropertyValue<T extends keyof CSSProperties> = PropertyValue<
  T,
  typeof config
>;

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
    /**
     * Allows for the usage of boolean css props in custom components
     * and assigns the props accordingly,
     * where empty values are disregarded
     * and only values that are true resolve to the given trueValue.
     */
    resolveCSSProperties: (
      entries: (RequireExactlyOne<Record<keyof CSSProperties, unknown>> & {
        trueValue: string | number;
      })[]
    ) => {
      const cssPropValues = entries.reduce((prev, { trueValue, ...entry }) => {
        const [name, val] = Object.entries(entry).pop()!;
        const resolved =
          !val && typeof val !== 'number'
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
