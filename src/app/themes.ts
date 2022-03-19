// https://stitches.dev/docs/theming
import { createTheme } from './stitches.config';

export const light = createTheme({
  colors: { bg: 'white', fg: 'black' },
});

export const dark = createTheme({
  colors: { bg: 'hsl(208,8%,8%)', fg: 'white' },
});
