// https://stitches.dev/docs/theming
import { gray, grayDark } from '@radix-ui/colors';
import { createTheme } from '@/lib/stitches';

export const light = createTheme({
  colors: { ...gray },
});

export const dark = createTheme({
  colors: { ...grayDark },
});
