import { Primitive, RequireExactlyOne } from 'type-fest';
import { useCallback, useRef, useState } from 'react';

type State = Primitive | object;
type Togglable = [] | [State];
type Cyclable = readonly State[];

export const useCycle = <T extends Cyclable>(...initialStates: T) => {
  const [state, setState] = useState(0);
  const states = useRef(
    initialStates.length < 2
      ? [!!initialStates[0], !initialStates[0]]
      : initialStates
  );

  return [
    states.current[state] as T extends Togglable ? boolean : T[number],
    useCallback(
      (update?: RequireExactlyOne<{ index: number; value: T[number] }>) =>
        setState((prev) => {
          let { index, value } = update || {};
          if (value) index = states.current.findIndex((val) => val === value);
          index ??= prev + 1;
          return index < states.current.length ? index : 0;
        }),
      []
    ),
  ] as const;
};
