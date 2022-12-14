import NextHead from 'next/head';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { styled } from '@/lib/stitches';

export const Head = <T extends ElementType = 'body'>({
  title = 'Next.js App',
  description = '...',
  as,
  body,
  ...rest
}: {
  title?: string;
  description?: string;
  as?: T;
  body?: ReactNode;
} & ComponentPropsWithoutRef<T>) => {
  const Body = styled(as || 'body');

  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      {body && <Body {...rest}>{body}</Body>}
    </>
  );
};
