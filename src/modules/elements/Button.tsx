// https://arifszn.com/reactive-button/docs/
// https://stitches.dev/docs/composing-components
import ReactiveButton from 'reactive-button';
import { globalFonts } from '@/app/global-styles';
import { styled } from '@/app/stitches.config';

export const Button = styled(ReactiveButton, {
  fontWeight: '500 !important',
  fontFamily: globalFonts.join(','),
});
