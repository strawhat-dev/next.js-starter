import { GetServerSideProps } from 'next';
import axios from 'axios';
import Image from 'next/image';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useCycle } from '@/hooks';
import { Button, Text } from '@/components/elements';
import { Box, Flexbox, Grid } from '@/components/layout';

/** @see https://pokeapi.co/ */
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';
interface Pokemon {
  name: string;
  stats: { stat: { name: string }; base_stat: number }[];
  sprites: { other: { home: { front_default: string } } };
}

// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { pokemon },
  } = context;

  const {
    data: { name, stats, sprites },
  } = await axios.get<Pokemon>(`/${pokemon || 'pikachu'}`);

  return { props: { pokemon: { name, stats, sprites } } };
};

// http://localhost:3000/?pokemon=[query] (or pikachu by default)
export default function Index({ pokemon }: { pokemon?: Pokemon }) {
  const { setTheme } = useTheme();
  const [theme, cycleTheme] = useCycle('light', 'dark');

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return (
    <Flexbox
      justifyContent
      flexDirection="column"
      css={{ mx: '15%', minHeight: '100%' }}
    >
      <Grid gap itemMargin>
        <Box>
          <Text h1 size="2.75rem">
            {pokemon?.name}
          </Text>
          {pokemon?.stats.map(({ stat: { name }, base_stat }) => (
            <Flexbox
              key={name}
              justifyContent="space-between"
              css={{ minWidth: '15rem' }}
            >
              <Text span size="1.25rem" weight="bold">
                {name}
              </Text>
              <Text span size="1.25rem" weight="bold">
                {base_stat}
              </Text>
            </Flexbox>
          ))}
        </Box>
        <Box dropShadow>
          {pokemon && (
            <Image
              priority
              width={600}
              height={600}
              alt={pokemon.name}
              src={pokemon.sprites.other.home.front_default}
            />
          )}
        </Box>
      </Grid>
      <Box css={{ textAlign: 'center', my: '3rem' }}>
        <Button shadow rounded size="large" onClick={() => cycleTheme()} />
      </Box>
    </Flexbox>
  );
}
