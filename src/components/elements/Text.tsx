import { SetEntry } from 'type-fest/source/entry';
import { ComponentProps, ElementType, ForwardedRef, forwardRef } from 'react';
import { BoxProps } from '@/components/layout';
import { CSS, StyledComponent } from '@/lib/stitches';

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

type TextProps = {
  font?: CSS['fontFamily'];
  size?: CSS['fontSize'];
  weight?: CSS['fontWeight'];
  style?: CSS['fontStyle'];
} & { [P in HTMLTextTag]?: boolean };

const StyledText = <T extends ElementType = 'p'>(
  { as, css, font, size, weight, style, ...rest }: TextProps & BoxProps<T> & ComponentProps<T>,
  ref: ForwardedRef<ElementType>
) => {
  const [tag, props] = Object.entries(rest).reduce(
    ([prevTag, prevProps], [key, val]) =>
      val && HTMLTextTags.has(key as HTMLTextTag)
        ? [key, prevProps]
        : [prevTag, { ...prevProps, [key]: val }],
    ['p', {}]
  );

  return (
    <StyledComponent
      {...props}
      ref={ref}
      as={as || (tag as HTMLTextTag)}
      css={{
        ...css,
        fontFamily: font,
        fontSize: size,
        fontWeight: weight,
        fontStyle: style,
      }}
    />
  );
};

export const Text = forwardRef(StyledText);
