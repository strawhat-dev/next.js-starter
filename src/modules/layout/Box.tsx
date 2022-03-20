import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';
import { ComponentProps } from '@stitches/react';
import { styled } from '@/app/stitches.config';

export const Box = ({
  as,
  flexbox,
  ...props
}: { as?: IntrinsicElementsKeys; flexbox?: boolean } & ComponentProps<
  typeof box
>) => {
  const StyledBox = styled(as || 'div', {
    resolveCSSProperties: [{ display: flexbox, trueValue: 'flex' }],
  });

  return <StyledBox {...props} />;
};

const box = styled({} as IntrinsicElementsKeys);
