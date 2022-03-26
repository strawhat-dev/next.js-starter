import { useCallback, useRef, useState } from 'react';

export const useToggle = <T = boolean>(...initialStates: readonly T[]) => {
  const [state, setState] = useState(0);
  const states = useRef(
    initialStates.length < 2
      ? ([!!initialStates[0], !initialStates[0]] as const)
      : initialStates
  );

  return [
    states.current[state],
    useCallback(
      (i?: number) =>
        setState((prev) => {
          i ??= prev + 1;
          return states.current[i] === undefined ? 0 : i;
        }),
      []
    ),
  ] as [T, (i?: number) => void];
};
