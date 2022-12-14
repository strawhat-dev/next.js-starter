/**
 * @summary Similar to findIndex method of Array, where instead the first
 * key that satisfies the predicate for the corresponding value is returned
 * (or undefined if not found)
 */
export const findKey = <T extends Record<string, unknown>>(
  obj: T,
  predicate = (val: unknown) => val
): keyof T | undefined => {
  return (Object.entries(obj).find(([_, v]) => predicate(v)) || [])[0];
};
