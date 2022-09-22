export const resolveBooleanMapping = <
  T extends Record<string, boolean | undefined>
>(
  items: T
): keyof T | undefined => {
  return Object.entries(items).reduce<keyof T | undefined>(
    (acc, [k, v]) => (v ? (k as keyof T) : acc),
    undefined
  );
};
