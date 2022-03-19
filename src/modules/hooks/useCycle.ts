// https://www.framer.com/docs/utilities/#usecycle
import { useRef, useState } from 'react';

type CycleState<T> = [T, (i?: number) => void];

export const useCycle = <T>(...items: T[]): CycleState<T> => {
  const index = useRef(0);
  const [item, setItem] = useState(items[index.current]);

  return [
    item,
    (i?: number) => {
      const next = wrap(0, items.length, index.current + 1);
      index.current = typeof i === 'number' ? i : next;
      setItem(items[index.current]);
    },
  ];
};

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
