import NextHead from 'next/head';

interface Head {
  title: string;
  author: string;
  description: string;
}

export const Head = ({ title, author, description }: Head) => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
