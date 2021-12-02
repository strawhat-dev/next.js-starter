import NextLink from 'next/link';
import { Link } from '@mui/material';

interface MUILink {
  title: string;
  href: string;
  color?: string;
  variant?: any;
  hover?: boolean;
}

export const MUILink = ({
  title,
  href,
  color = 'inherit',
  variant = 'inherit',
  hover = false,
}: MUILink) => (
  <NextLink href={href} passHref>
    <Link variant={variant} color={color} underline={hover ? 'hover' : 'none'}>
      {title}
    </Link>
  </NextLink>
);
