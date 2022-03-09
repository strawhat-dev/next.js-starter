import { globalCss } from './stitches.config';

export const applyGlobalCss = globalCss({
  h1: { fontSize: '2em', fontWeight: 'bolder' },
  h2: { fontSize: '1.5em', fontWeight: 'bolder' },
  h3: { fontSize: '1.17em', fontWeight: 'bolder' },
  h4: { fontSize: '1em', fontWeight: 'bolder' },
  h5: { fontSize: '0.83em', fontWeight: 'bolder' },
  h6: { fontSize: '0.67em', fontWeight: 'bolder' },
  ':root': {
    fontSize: 16,
    minHeight: '100vh',
    fontFamily: 'system-ui',
  },
});
