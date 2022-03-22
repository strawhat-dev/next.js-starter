import 'sanitize.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/system-ui.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/ui-monospace.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Head } from '@/components/next';
import { dark, light } from '@/config/themes';
import { applyGlobalCSS } from '@/lib/stitches';

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
