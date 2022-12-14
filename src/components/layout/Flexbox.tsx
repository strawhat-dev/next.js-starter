import {
  ComponentPropsWithRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';
import { BoxProps } from '@/components/layout';
import { CSS, StyledComponent } from '@/lib/stitches';
import { findKey } from '@/util';

interface FlexboxProps {
  span?: boolean;
  button?: boolean;
  flexDirection?: CSS['flexDirection'];
  justifyContent?: CSS['justifyContent'] | boolean;
  alignItems?: CSS['alignItems'] | boolean;
}

const StyledFlexbox = <T extends ElementType = 'div'>(
  {
    as,
    css,
    span,
    button,
    border,
    boxShadow,
    dropShadow,
    flexDirection,
    justifyContent,
    alignItems,
    ...rest
  }: FlexboxProps & BoxProps<T> & ComponentPropsWithRef<T>,
  ref: ForwardedRef<ElementRef<T>>
) => {
  const el = findKey({ span, button });

  return (
    <StyledComponent
      {...rest}
      ref={ref}
      as={el || as}
      css={{
        ...css,
        flexDirection,
        display: 'flex',
        resolveCSSProperties: [
          { alignItems, trueValue: 'center' },
          { justifyContent, trueValue: 'center' },
          { border, trueValue: 'solid $gray8' },
          { boxShadow, trueValue: '$soft' },
          { dropShadow, trueValue: '$blur' },
        ],
      }}
    />
  );
};

export const Flexbox = forwardRef(StyledFlexbox);
