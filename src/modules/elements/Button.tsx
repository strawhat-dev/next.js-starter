import ReactiveButton from 'reactive-button';
import { globalFonts } from '@/app/global-css';
import { styled } from '@/app/stitches.config';

export const Button = styled(ReactiveButton, {
  fontWeight: '500 !important',
  fontFamily: globalFonts.join(','),
});
