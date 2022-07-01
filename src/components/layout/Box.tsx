import { ComponentProps, ElementType, ForwardedRef, forwardRef } from 'react';
import { CSS, StyledComponent } from '@/lib/stitches';

export interface BoxProps<T = 'div'> {
  as?: T;
  css?: CSS;
  border?: CSS['border'] | boolean;
  boxShadow?: CSS['boxShadow'] | boolean;
  dropShadow?: CSS['dropShadow'] | boolean;
}

const StyledBox = <T extends ElementType = 'div'>(
  {
    as,
    css,
    border,
    boxShadow,
    dropShadow,
    ...rest
  }: BoxProps<T> & ComponentProps<T>,
  ref: ForwardedRef<Element>
) => (
  <StyledComponent
    {...rest}
    {...{ as, ref }}
    css={{
      ...css,
      resolveCSSProperties: [
        { border, trueValue: 'solid $gray8' },
        { boxShadow, trueValue: '$soft' },
        { dropShadow, trueValue: '$blur' },
      ],
    }}
  />
);

export const Box = forwardRef(StyledBox);
