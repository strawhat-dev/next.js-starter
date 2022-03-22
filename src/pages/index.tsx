import { Pokemon } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useTheme } from 'next-themes';
import { Button, Text } from '@/components/elements';
import { Box, Grid } from '@/components/layout';

// http://localhost:3000/?pokemon=[query] (or pikachu by default)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { pokemon },
  } = context;

  const {
    data: { id, name, stats, sprites },
  } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemon || 'pikachu'}`
  );

  return { props: { pokemon: { id, name, stats, sprites } } };
};

export default function Index({ pokemon }: { pokemon?: Pokemon }) {
  const { theme, setTheme } = useTheme();

  return (
    <Box
      flexbox
      flexDirection="column"
      justifyContent="center"
      css={{ mx: '15%' }}
    >
      {pokemon && (
        <Grid itemMargin gap>
          <Box>
            <Text h1>{pokemon.name}</Text>
            <Text h3>{`id: ${pokemon.id}`}</Text>
            {pokemon.stats.map(({ base_stat, stat: { name } }) => (
              <Text h3 key={name}>{`${name}: ${base_stat}`}</Text>
            ))}
          </Box>
          <Box>
            <Image
              alt="pokemon"
              width={600}
              height={600}
              src={pokemon.sprites.other.home.front_default}
            />
          </Box>
        </Grid>
      )}
      <Box css={{ textAlign: 'center', mb: 50 }}>
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
