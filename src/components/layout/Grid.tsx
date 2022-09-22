import {
  ComponentPropsWithRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';
import { BoxProps } from '@/components/layout';
import { CSS, StyledComponent } from '@/lib/stitches';

interface GridProps {
  paddingBlock?: CSS['paddingBlock'] | boolean;
  gap?: CSS['gap'] | boolean;
  columns?: 'auto-fit' | 'auto-fill' | number;
  columnSize?: CSS['width'];
  rowSize?: CSS['gridAutoRows'];
  itemMargin?: CSS['margin'] | boolean;
  itemBorder?: CSS['border'] | boolean;
  itemBoxShadow?: CSS['boxShadow'] | boolean;
}

const StyledGrid = <T extends ElementType = 'div'>(
  {
    as,
    css,
    border,
    boxShadow,
    dropShadow,
    paddingBlock,
    gap,
    columns = 'auto-fit',
    columnSize = '16rem',
    rowSize = 'auto',
    itemMargin,
    itemBorder,
    itemBoxShadow,
    ...rest
  }: GridProps & BoxProps<T> & ComponentPropsWithRef<T>,
  ref: ForwardedRef<ElementRef<T>>
) => (
  <StyledComponent
    {...rest}
    {...{ ref, as }}
    css={{
      ...css,
      display: 'grid',
      gridAutoRows: rowSize,
      gridTemplateColumns: `repeat(${columns}, minmax(${columnSize}, 1fr))`,
      resolveCSSProperties: [
        { border, trueValue: 'solid $gray8' },
        { boxShadow, trueValue: '$soft' },
        { dropShadow, trueValue: '$blur' },
        { paddingBlock, trueValue: '2rem' },
        { gap, trueValue: '2rem' },
      ],
      '& > *': {
        resolveCSSProperties: [
          { margin: itemMargin, trueValue: 'auto' },
          { border: itemBorder, trueValue: '2px solid $gray8' },
          { boxShadow: itemBoxShadow, trueValue: '$sm' },
        ],
      },
    }}
  />
);

export const Grid = forwardRef(StyledGrid);
