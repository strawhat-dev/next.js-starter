// https://fettblog.eu/typescript-react-generic-forward-refs/#option-3%3A-augment-forwardref
declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export interface Pokemon {
  name: string;
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { other: { home: { front_default: string } } };
}
