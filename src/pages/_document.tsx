// https://stitches.dev/docs/server-side-rendering
// https://nextjs.org/docs/advanced-features/react-18/server-components#nextdocument
import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '@/lib/stitches';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
