// https://www.radix-ui.com/docs/colors/getting-started/usage#stitches
import { gray, grayA, grayDark, grayDarkA } from '@radix-ui/colors';
import { createTheme } from '@/lib/stitches';

export const light = createTheme({
  colors: { ...gray, ...grayA },
});

export const dark = createTheme({
  colors: { ...grayDark, ...grayDarkA },
});
