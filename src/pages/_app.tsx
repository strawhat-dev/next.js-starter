import 'the-new-css-reset/css/reset.css';
import { AppProps } from 'next/app';
import { applyGlobalCSS } from '@/app';
import { Head } from '@/common';

applyGlobalCSS();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
