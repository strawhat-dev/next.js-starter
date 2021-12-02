import type { ReactNode } from 'react';
import type { SxProps } from '@mui/system';

import Link from 'next/link';
import { forwardRef } from 'react';
import { Button, IconButton, Fab, Tooltip } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const MUI_SIZES = new Set(['small', 'medium', 'large']);
const MUI_COLORS = new Set([
  'default',
  'inherit',
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
]);

const LinkWrapper = ({
  href,
  children,
}: {
  href: any;
  children?: ReactNode;
}) => {
  return href ? (
    <Link href={href} passHref>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
};

interface TooltipWrapper {
  tooltip: string | undefined;
  children?: ReactNode;
}

const TooltipWrapper = forwardRef(
  ({ tooltip, children }: TooltipWrapper, ref: any) => {
    return tooltip ? (
      <Tooltip title={tooltip} followCursor>
        <span ref={ref}>{children}</span>
      </Tooltip>
    ) : (
      <>{children}</>
    );
  }
);

interface CustomButton {
  onClick?: () => any;
  title?: string | undefined;
  icon?: ReactNode | undefined;
  iconPosition?: 'start' | 'end' | undefined;
  variant?: any;
  color?: any;
  size?: any;
  buttonSx?: SxProps;
  fab?: boolean;
  edgeStart?: boolean;
  edgeEnd?: boolean;
  fullWidth?: boolean;
  form?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const CustomButton = forwardRef(
  (
    {
      onClick,
      title,
      icon,
      iconPosition,
      variant,
      color,
      size,
      buttonSx,
      fab,
      edgeStart,
      edgeEnd,
      fullWidth,
      form,
      loading,
      disabled,
    }: CustomButton,
    ref: any
  ) => {
    const fabColor = color === 'inherit' ? 'default' : color;
    const customColor = MUI_COLORS.has(color) ? {} : { backgroundColor: color };
    const customSize = MUI_SIZES.has(size) ? {} : { fontSize: size };
    const sx = { ...buttonSx, ...customColor, ...customSize };
    const buttonMapping = {
      textOnly: (
        <Button
          ref={ref}
          {...{ onClick, variant, sx, fullWidth, disabled }}
          {...(MUI_COLORS.has(color) ? { color } : null)}
          {...(MUI_SIZES.has(size) ? { size } : null)}
          {...((form ? { type: 'form' } : null) as any)}
        >
          {title}
        </Button>
      ),
      iconOnly: (
        <IconButton
          ref={ref}
          {...{ onClick, sx, disabled }}
          {...(MUI_COLORS.has(color) ? { color } : null)}
          {...(MUI_SIZES.has(size) ? { size } : null)}
          {...((form ? { type: 'form' } : null) as any)}
          edge={(edgeStart && 'start') || (edgeEnd && 'end')}
        >
          {icon}
        </IconButton>
      ),
      containedIcon: (
        <Button
          ref={ref}
          {...{ onClick, variant, sx, fullWidth, disabled }}
          {...(MUI_COLORS.has(color) ? { color } : null)}
          {...(MUI_SIZES.has(size) ? { size } : null)}
          {...((form ? { type: 'form' } : null) as any)}
        >
          {icon}
        </Button>
      ),
      labeledIcon: (
        <Button
          ref={ref}
          {...{ onClick, variant, sx, fullWidth, disabled }}
          {...(MUI_COLORS.has(color) ? { color } : null)}
          {...(MUI_SIZES.has(size) ? { size } : null)}
          {...((form ? { type: 'form' } : null) as any)}
          {...(iconPosition === 'start'
            ? { startIcon: icon }
            : { endIcon: icon })}
        >
          {title}
        </Button>
      ),
      fab: (
        <Fab
          ref={ref}
          {...{ onClick, sx, disabled }}
          {...(MUI_COLORS.has(fabColor) ? { color: fabColor } : null)}
          {...(MUI_SIZES.has(size) ? { size } : null)}
          {...((form ? { type: 'form' } : null) as any)}
        >
          {icon}
        </Fab>
      ),
      loadingButton: (
        <LoadingButton
          loadingPosition={iconPosition || 'center'}
          {...(MUI_COLORS.has(color) ? { color: color } : null)}
          {...(MUI_SIZES.has(size) ? { size } : null)}
          {...{ variant, sx, fullWidth, loading, disabled }}
        >
          {title}
        </LoadingButton>
      ),
    };

    return buttonMapping[
      fab
        ? 'fab'
        : loading
        ? 'loadingButton'
        : title && icon
        ? 'labeledIcon'
        : icon && variant !== 'icon'
        ? 'iconOnly'
        : icon
        ? 'containedIcon'
        : 'textOnly'
    ];
  }
);

interface MUIButton extends CustomButton {
  href?: string | undefined;
  tooltip?: string | undefined;
}

export const MUIButton = ({
  href,
  tooltip,
  onClick,
  title,
  icon,
  iconPosition,
  variant = 'contained',
  color = 'inherit',
  size = 'large',
  buttonSx = {},
  fab = false,
  edgeStart = false,
  edgeEnd = false,
  fullWidth = false,
  form = false,
  loading = false,
  disabled = false,
}: MUIButton) => {
  return (
    <TooltipWrapper tooltip={tooltip}>
      <LinkWrapper href={!loading && href}>
        <CustomButton
          {...{
            onClick,
            title,
            icon,
            iconPosition,
            variant,
            color,
            size,
            buttonSx,
            fab,
            edgeStart,
            edgeEnd,
            fullWidth,
            form,
            loading,
            disabled,
          }}
        />
      </LinkWrapper>
    </TooltipWrapper>
  );
};
