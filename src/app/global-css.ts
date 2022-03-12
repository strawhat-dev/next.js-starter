import { globalCss } from './stitches.config';

export const applyGlobalCSS = globalCss({
  '*': { boxSizing: 'inherit' },
  '*:before': { boxSizing: 'inherit' },
  '*:after': { boxSizing: 'inherit' },
  html: {
    fontSize: 16,
    minHeight: '100vh',
    boxSizing: 'border-box',
    fontFamily: 'system-ui',
  },
});
