import { ElementType } from 'react';
import { ComponentProps } from '@stitches/react';
import { styled } from '@/app';

const box = styled('div');

export const Box = ({
  as,
  ...props
}: { as?: ElementType } & ComponentProps<typeof box>) => {
  const StyledBox = styled(as || 'div');

  return <StyledBox {...props} />;
};
