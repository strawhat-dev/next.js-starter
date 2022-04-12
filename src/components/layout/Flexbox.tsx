import { ComponentProps, ElementType, ForwardedRef, forwardRef } from 'react';
import { BoxProps } from '@/components/layout';
import { CSS, StyledComponent } from '@/lib/stitches';

interface FlexboxProps {
  flexDirection?: CSS['flexDirection'];
  justifyContent?: CSS['justifyContent'] | boolean;
  alignItems?: CSS['alignItems'] | boolean;
}

const StyledFlexbox = <T extends ElementType = 'div'>(
  {
    as,
    css,
    border,
    boxShadow,
    dropShadow,
    flexDirection,
    justifyContent,
    alignItems,
    ...rest
  }: FlexboxProps & BoxProps<T> & ComponentProps<T>,
  ref: ForwardedRef<ElementType>
) => {
  return (
    <StyledComponent
      {...rest}
      {...{ ref, as }}
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
