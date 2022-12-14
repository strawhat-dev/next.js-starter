import NextHead from 'next/head';
import { ReactNode } from 'react';

export const Head = ({
  title = 'Next.js App',
  description = '...',
  children,
}: {
  title?: string;
  description?: string;
  children?: ReactNode;
}) => (
  <>
    <NextHead>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
    {children}
  </>
);
