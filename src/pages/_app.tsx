import '@/app/globals.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { Header } from '@/common/Header';

const headerProps = {
  title: '',
  author: '',
  description: '',
};

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Header {...headerProps}/>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default App;
