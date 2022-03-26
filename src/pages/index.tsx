import { Pokemon } from '@/types';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import axios from 'axios';
import { useTheme } from 'next-themes';
import { Button, Text } from '@/components/elements';
import { Box, Grid } from '@/components/layout';

const Image = dynamic(() => import('next/image'), { suspense: true });

// http://localhost:3000/?pokemon=[query] (or pikachu by default)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { pokemon },
  } = context;

  const {
    data: { name, stats, sprites },
  } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemon || 'pikachu'}`
  );

  return { props: { pokemon: { name, stats, sprites } } };
};

export default function Index({ pokemon }: { pokemon: Pokemon }) {
  const { theme, setTheme } = useTheme();

  return (
    <Box flexbox justifyContent flexDirection="column" css={{ mx: '15%' }}>
      <Grid gap itemMargin>
        <Box>
          <Text h1 size="2.75rem">
            {pokemon.name}
          </Text>
          {pokemon.stats.map(({ base_stat, stat: { name } }) => (
            <Box
              key={name}
              flexbox
              justifyContent="space-between"
              css={{ minWidth: '15rem' }}
            >
              <Text span size="1.25rem" weight="bold">
                {name}
              </Text>
              <Text span size="1.25rem" weight="bold">
                {base_stat}
              </Text>
            </Box>
          ))}
        </Box>
        <Box shadow>
          <Suspense fallback="loading...">
            <Image
              priority
              width={600}
              height={600}
              alt={pokemon.name}
              src={pokemon.sprites.other.home.front_default}
            />
          </Suspense>
        </Box>
      </Grid>
      <Box css={{ textAlign: 'center', my: '3rem' }}>
        <Button
          shadow
          rounded
          size="large"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </Box>
    </Box>
  );
}
