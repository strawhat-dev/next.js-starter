// https://stitches.dev/docs/server-side-rendering
// https://nextjs.org/docs/advanced-features/react-18/server-components#nextdocument
import { Head, Html, Main, NextScript } from 'next/document';
import { applyGlobalCSS, getCssText } from '@/lib/stitches';

const sanitizeCSS = [
  'npm/sanitize.css@latest/sanitize.min.css',
  'npm/sanitize.css@latest/system-ui.min.css',
  'npm/sanitize.css@latest/ui-monospace.min.css',
  'npm/sanitize.css@latest/typography.min.css',
  'npm/sanitize.css@latest/assets.min.css',
  'npm/sanitize.css@latest/forms.min.css',
].join(',');

export default function Document() {
  applyGlobalCSS();
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href={`https://cdn.jsdelivr.net/combine/${sanitizeCSS}`} />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
