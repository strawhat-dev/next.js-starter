import { ValueOf } from 'type-fest';
import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';
import { ComponentType } from 'react';
import { CSS, StyledComponentProps, styled } from '@/lib/stitches';

interface BoxProps extends StyledComponentProps {
  as?: IntrinsicElementsKeys | ComponentType;
  flex?: ValueOf<CSS, 'flex'> | boolean;
  flexbox?: boolean;
  flexDirection?: ValueOf<CSS, 'flexDirection'>;
  alignItems?: ValueOf<CSS, 'alignItems'> | boolean;
  justifyContent?: ValueOf<CSS, 'justifyContent'> | boolean;
  border?: ValueOf<CSS, 'border'> | boolean;
  shadow?: ValueOf<CSS, 'shadow'> | boolean;
  boxShadow?: ValueOf<CSS, 'boxShadow'> | boolean;
}

export const Box = ({
  as = 'div',
  flex,
  flexbox,
  flexDirection,
  alignItems,
  justifyContent,
  border,
  shadow,
  boxShadow,
  ...props
}: BoxProps) => {
  const StyledBox = styled(as, {
    flexDirection,
    resolveCSSProperties: [
      { flex, trueValue: 1 },
      { border, trueValue: 'solid $gray8' },
      { shadow, trueValue: '$blur' },
      { boxShadow, trueValue: '$soft' },
      { alignItems, trueValue: 'center' },
      { justifyContent, trueValue: 'center' },
      { display: flexbox, trueValue: 'flex' },
    ],
  });

  return <StyledBox {...props} />;
};
