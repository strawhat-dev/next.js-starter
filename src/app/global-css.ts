import { globalCss } from './stitches.config';

export const applyGlobalCSS = globalCss({
  ':root': {
    fontSize: 16,
    minHeight: '100vh',
    fontFamily: 'system-ui',
  },
});
