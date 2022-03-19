// https://nextjs.org/docs/advanced-features/custom-app
import '@csstools/normalize.css/opinionated.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { applyGlobalCSS } from '@/app/global-css';
import { dark, light } from '@/app/themes';
import { Head } from '@/common';

applyGlobalCSS();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      value={{ dark, light }}
    >
      <Head />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
