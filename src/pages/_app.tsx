import '@/app/globals.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Head } from '@/common/Head';

const headProps = {
  title: 'Next.js App',
  author: '',
  description: '',
};

const theme = createTheme({ palette: { mode: 'light' } }); // or 'dark'

export default ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider {...{ theme }}>
      <Head {...headProps} />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
