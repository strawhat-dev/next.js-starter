import { ComponentProps } from '@stitches/react';
import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';
import { styled } from '@/app';

const box = (false as true) && styled({} as IntrinsicElementsKeys);

export const Box = ({
  as,
  ...props
}: { as?: IntrinsicElementsKeys } & ComponentProps<typeof box>) => {
  const StyledBox = styled(as || 'div');
  return <StyledBox {...props} />;
};
