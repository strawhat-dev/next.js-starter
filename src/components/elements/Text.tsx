import { Except, RequireExactlyOne, ValueOf } from 'type-fest';
import { SetEntry } from 'type-fest/source/entry';
import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';
import { ComponentType } from 'react';
import { CSS, StyledComponentProps, styled } from '@/lib/stitches';

interface TextProps extends Except<StyledComponentProps, 'style'> {
  font?: ValueOf<CSS, 'fontFamily'>;
  size?: ValueOf<CSS, 'fontSize'>;
  weight?: ValueOf<CSS, 'fontWeight'>;
  style?: ValueOf<CSS, 'fontStyle'>;
}

const HTMLTextTags = new Set([
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'em',
  'li',
  'pre',
  'del',
  'span',
  'code',
  'strong',
] as const);

type HTMLTextTag = SetEntry<typeof HTMLTextTags>[number];

export const Text = (
  props: TextProps &
    Partial<
      RequireExactlyOne<
        Record<HTMLTextTag, boolean> & {
          as: IntrinsicElementsKeys | ComponentType;
        }
      >
    >
) => {
  const { as, font, size, weight, style, ...rest } = props;
  const [tag, styledProps] = Object.entries(rest).reduce(
    ([prev, props], [key, val]) =>
      HTMLTextTags.has(key as HTMLTextTag) && val
        ? [key, props]
        : [prev, { ...props, [key]: val }],
    ['p', {}]
  );

  const StyledText = styled(as || (tag as HTMLTextTag), {
    fontFamily: font,
    fontSize: size,
    fontWeight: weight,
    fontStyle: style,
  });

  return <StyledText {...styledProps} />;
};
