// https://stitches.dev/docs/server-side-rendering
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '@/app/stitches.config';

export default class Document extends NextDocument {
  render = () => (
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
