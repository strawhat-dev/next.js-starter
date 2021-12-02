import type { CSSProperties } from 'react';
import type { SxProps } from '@mui/system';

export const center: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const hoverZoom = (scale: number): SxProps => ({
  transition: 'transform .2s',
  '&:hover': { transform: `scale(${scale})` },
});
