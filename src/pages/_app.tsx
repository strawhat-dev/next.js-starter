import 'the-new-css-reset/css/reset.css';
import { AppProps } from 'next/app';
import { applyGlobalCss } from '@/app';
import { Head } from '@/common';

applyGlobalCss();

const headProps = {
  title: 'Next.js App',
  author: '',
  description: '',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head {...headProps} />
      <Component {...pageProps} />
    </>
  );
}
