// pythonic range
export const range = (n: number, stop?: number, step?: number) => {
  step ??= 1;
  [stop, n] = stop === undefined ? [0, n] : [n, stop];
  if (stop > n) n += 2;
  return [...Array(~~((n - stop - 1) / step) + 1).keys()].map(
    (n) => stop! + n * step!
  );
};

// inclusive range
export const irange = (n: number, stop?: number, step?: number) => {
  step ??= 1;
  [stop, n] = stop === undefined ? [0, n] : [n, stop];
  return [...Array(~~((n - stop) / step) + 1).keys()].map(
    (n) => stop! + n * step!
  );
};
