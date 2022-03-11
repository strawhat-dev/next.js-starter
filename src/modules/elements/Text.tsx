import { ComponentProps } from '@stitches/react';
import { styled } from '@/app';

const text =
  (false as true) &&
  styled({} as 'h1' | 'h2' | 'h3' | 'h3' | 'h4' | 'h5' | 'h6' | 'p');

export const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ...props
}: {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
} & ComponentProps<typeof text>) => {
  const StyledText = styled(
    h1 ? 'h1' : h2 ? 'h2' : h3 ? 'h3' : h4 ? 'h4' : h5 ? 'h5' : h6 ? 'h6' : 'p'
  );

  return <StyledText {...props} />;
};
