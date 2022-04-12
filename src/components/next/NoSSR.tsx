import { ReactNode } from 'react';

export const NoSSR = ({ children }: { children?: ReactNode }) => (
  <div suppressHydrationWarning>{typeof window !== 'undefined' && children}</div>
);
