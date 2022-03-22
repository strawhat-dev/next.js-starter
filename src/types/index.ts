export interface Pokemon {
  id: number;
  name: string;
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { other: { home: { front_default: string } } };
}
