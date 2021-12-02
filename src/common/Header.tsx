import Head from 'next/head';

interface Header {
  title: string;
  author: string;
  description: string;
}

export const Header = ({ title, author, description }: Header) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
