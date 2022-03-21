import NextHead from 'next/head';

export const Head = ({
  title = 'Next.js App',
  description = 'Next.js app built with TypeScript and Stitches',
}: {
  title?: string;
  description?: string;
}) => (
  <NextHead>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);
