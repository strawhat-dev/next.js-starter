import 'the-new-css-reset/css/reset.css';
import { AppProps } from 'next/app';
import { Head } from '@/common';

const headProps = {
  title: 'Next.js App',
  author: '',
  description: '',
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head {...headProps} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
