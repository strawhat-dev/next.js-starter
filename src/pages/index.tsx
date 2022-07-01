import { Pokemon } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useTheme } from 'next-themes';
import { Button, Text } from '@/components/elements';
import { Box, Flexbox, Grid } from '@/components/layout';

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
    <Flexbox justifyContent flexDirection="column" css={{ mx: '15%' }}>
      <Grid gap itemMargin>
        <Box>
          <Text h1 size="2.75rem">
            {pokemon.name}
          </Text>
          {pokemon.stats.map(({ base_stat, stat: { name } }) => (
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
          <Image
            priority
            width={600}
            height={600}
            alt={pokemon.name}
            src={pokemon.sprites.other.home.front_default}
          />
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
    </Flexbox>
  );
}
