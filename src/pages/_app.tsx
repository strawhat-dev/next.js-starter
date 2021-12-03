import '@/app/globals.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { Head } from '@/common/Head';

const headProps = {
  title: 'Next.js App',
  author: '',
  description: '',
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head {...headProps} />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default App;
