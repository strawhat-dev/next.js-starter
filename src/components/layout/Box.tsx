import {
  ComponentPropsWithRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';
import { CSS, StyledComponent } from '@/lib/stitches';
import { resolveBooleanMapping } from '@/util';

export interface BoxProps<T> {
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
    span,
    button,
    border,
    boxShadow,
    dropShadow,
    ...rest
  }: { span?: boolean; button?: boolean } & BoxProps<T> &
    ComponentPropsWithRef<T>,
  ref: ForwardedRef<ElementRef<T>>
) => {
  const el = resolveBooleanMapping({ span, button });

  return (
    <StyledComponent
      {...rest}
      {...{ ref }}
      as={el || as}
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
};

export const Box = forwardRef(StyledBox);
