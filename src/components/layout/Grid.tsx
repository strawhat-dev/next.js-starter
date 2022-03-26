import { ValueOf } from 'type-fest';
import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';
import { ComponentType } from 'react';
import { CSS, StyledComponentProps, styled } from '@/lib/stitches';

interface GridProps extends StyledComponentProps {
  as?: IntrinsicElementsKeys | ComponentType;
  columns?: 'auto-fit' | 'auto-fill' | number;
  columnSize?: Extract<ValueOf<CSS, 'width'>, string>;
  rowSize?: ValueOf<CSS, 'gridAutoRows'>;
  gap?: ValueOf<CSS, 'gap'> | boolean;
  paddingBlock?: ValueOf<CSS, 'paddingBlock'> | boolean;
  border?: ValueOf<CSS, 'border'> | boolean;
  shadow?: ValueOf<CSS, 'boxShadow'> | boolean;
  boxShadow?: ValueOf<CSS, 'boxShadow'> | boolean;
  itemMargin?: ValueOf<CSS, 'margin'> | boolean;
  itemBorder?: ValueOf<CSS, 'border'> | boolean;
  itemBoxShadow?: ValueOf<CSS, 'boxShadow'> | boolean;
}

export const Grid = ({
  as = 'div',
  columns = 'auto-fit',
  columnSize = '16rem',
  rowSize = 'auto',
  gap,
  paddingBlock,
  border,
  shadow,
  boxShadow,
  itemMargin,
  itemBorder,
  itemBoxShadow,
  ...props
}: GridProps) => {
  const StyledGrid = styled(as, {
    display: 'grid',
    gridAutoRows: rowSize,
    gridTemplateColumns: `repeat(${columns}, minmax(${columnSize}, 1fr))`,
    resolveCSSProperties: [
      { gap, trueValue: '2rem' },
      { paddingBlock, trueValue: '2rem' },
      { border, trueValue: 'solid $gray8' },
      { shadow, trueValue: '$blur' },
      { boxShadow, trueValue: '$soft' },
    ],
    '& > *': {
      resolveCSSProperties: [
        { margin: itemMargin, trueValue: 'auto' },
        { border: itemBorder, trueValue: '2px solid $gray8' },
        { boxShadow: itemBoxShadow, trueValue: '$sm' },
      ],
    },
  });

  return <StyledGrid {...props} />;
};
