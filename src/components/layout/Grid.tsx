import { CSSPropertyValue, StyledComponentProps, styled } from '@/lib/stitches';

interface GridProps extends StyledComponentProps {
  columns?: 'auto-fit' | 'auto-fill' | number;
  columnSize?: Extract<CSSPropertyValue<'width'>, string>;
  rowSize?: CSSPropertyValue<'gridAutoRows'>;
  gap?: CSSPropertyValue<'gap'> | boolean;
  paddingBlock?: CSSPropertyValue<'paddingBlock'> | boolean;
  itemMargin?: CSSPropertyValue<'margin'> | boolean;
  itemBorder?: CSSPropertyValue<'border'> | boolean;
  itemShadow?: CSSPropertyValue<'boxShadow'> | boolean;
}

export const Grid = ({
  columns = 'auto-fit',
  columnSize = '16rem',
  rowSize = 'auto',
  gap,
  paddingBlock,
  itemMargin,
  itemBorder,
  itemShadow,
  ...props
}: GridProps) => {
  const StyledGrid = styled('div', {
    display: 'grid',
    gridAutoRows: rowSize,
    gridTemplateColumns: `repeat(${columns}, minmax(${columnSize}, 1fr))`,
    resolveCSSProperties: [
      { gap, trueValue: '2rem' },
      { paddingBlock, trueValue: '2rem' },
    ],
    '& > *': {
      resolveCSSProperties: [
        { margin: itemMargin, trueValue: 'auto' },
        { border: itemBorder, trueValue: '1px dashed $gray10' },
        { boxShadow: itemShadow, trueValue: '$soft' },
      ],
    },
  });

  return <StyledGrid {...props} />;
};
