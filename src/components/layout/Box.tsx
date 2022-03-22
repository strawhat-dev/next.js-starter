import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';
import { CSSPropertyValue, StyledComponentProps, styled } from '@/lib/stitches';

interface BoxProps extends StyledComponentProps {
  as?: IntrinsicElementsKeys;
  flexbox?: boolean;
  flex?: CSSPropertyValue<'flex'> | boolean;
  flexDirection?: CSSPropertyValue<'flexDirection'>;
  justifyContent?: CSSPropertyValue<'justifyContent'>;
  alignItems?: CSSPropertyValue<'alignItems'>;
  margin?: CSSPropertyValue<'margin'>;
  padding?: CSSPropertyValue<'padding'>;
  size?: string | number;
}

export const Box = ({
  as = 'div',
  flexbox,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  margin,
  padding,
  size,
  ...props
}: BoxProps) => {
  const StyledBox = styled(as, {
    size,
    margin,
    padding,
    alignItems,
    justifyContent,
    flexDirection,
    resolveCSSProperties: [
      { display: flexbox, trueValue: 'flex' },
      { flex, trueValue: 1 },
    ],
  });

  return <StyledBox {...props} />;
};
