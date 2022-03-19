// https://stitches.dev/docs/api#globalcss
import { globalCss } from './stitches.config';

export const globalFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
];

export const applyGlobalCSS = globalCss({
  '*': { boxSizing: 'inherit' },
  '*:before': { boxSizing: 'inherit' },
  '*:after': { boxSizing: 'inherit' },
  '#__next': { height: '100vh' },
  html: {
    color: '$fg',
    backgroundColor: '$bg',
    boxSizing: 'border-box',
    fontFamily: globalFonts.join(','),
  },
});
