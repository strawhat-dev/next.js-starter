import 'the-new-css-reset/css/reset.css';
import type { AppProps } from 'next/app';
import { Head } from '@/common';

const headProps = {
  title: 'Next.js App',
  author: '',
  description: '',
};

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head {...headProps} />
      <Component {...pageProps} />
    </>
  );
};
