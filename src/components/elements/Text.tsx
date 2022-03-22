import { CSSPropertyValue, StyledComponentProps, styled } from '@/lib/stitches';

interface TextProps extends StyledComponentProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  pre?: boolean;
  code?: boolean;
  font?: CSSPropertyValue<'fontFamily'>;
  size?: CSSPropertyValue<'fontSize'>;
  weight?: CSSPropertyValue<'fontWeight'>;
}

export const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  font,
  size,
  weight,
  ...props
}: TextProps) => {
  const StyledText = styled(
    pre
      ? 'pre'
      : code
      ? 'code'
      : h1
      ? 'h1'
      : h2
      ? 'h2'
      : h3
      ? 'h3'
      : h4
      ? 'h4'
      : h5
      ? 'h5'
      : h6
      ? 'h6'
      : 'p',
    { fontFamily: font, fontSize: size, fontWeight: weight }
  );

  return <StyledText {...props} />;
};
