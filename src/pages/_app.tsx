// https://nextjs.org/docs/advanced-features/custom-app
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Head } from '@/components/next';
import { dark, light } from '@/config/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Head>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        value={{ light, dark }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </Head>
  );
}
