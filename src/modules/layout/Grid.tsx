import { ComponentProps } from '@stitches/react';
import { CSSPropertyValue, styled } from '@/app/stitches.config';

export const Grid = ({
  gap,
  paddingBlock,
  rowSize = 'auto',
  columnSize = '16rem',
  columns = 'auto-fit',
  ...props
}: {
  gap?: CSSPropertyValue<'gap'> | boolean;
  paddingBlock?: CSSPropertyValue<'paddingBlock'> | boolean;
  rowSize?: CSSPropertyValue<'gridAutoRows'>;
  columnSize?: Extract<CSSPropertyValue<'width'>, string>;
  columns?: 'auto-fit' | 'auto-fill' | number;
} & ComponentProps<typeof grid>) => {
  const StyledGrid = styled('div', {
    display: 'grid',
    gridAutoRows: rowSize,
    gridTemplateColumns: `repeat(${columns}, minmax(${columnSize}, 1fr))`,
    resolveCSSProperties: [
      { gap, trueValue: '2rem' },
      { paddingBlock, trueValue: '2rem' },
    ],
  });

  return <StyledGrid {...props} />;
};

const grid = styled('div');
