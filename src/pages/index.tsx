import { useTheme } from 'next-themes';
import { CSS } from '@/app/stitches.config';
import { Button, Text } from '@/modules/elements';
import { Box } from '@/modules/layout';

const center: CSS = {
  top: '50%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
};

export default function Index() {
  const { theme, setTheme } = useTheme();

  return (
    <Box css={center}>
      <Text h2 css={{ mb: '7%' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Curabitur vitae nunc
        sed velit dignissim sodales ut. Pulvinar mattis nunc sed blandit libero
        volutpat. Consectetur libero id faucibus nisl tincidunt eget nullam non
        nisi. Magna sit amet purus gravida quis blandit turpis cursus in.
        Bibendum neque egestas congue quisque egestas. Adipiscing elit
        pellentesque habitant morbi tristique senectus. Eget velit aliquet
        sagittis id consectetur. Nec tincidunt praesent semper feugiat nibh.
        Cras semper auctor neque vitae tempus quam. Dignissim enim sit amet
        venenatis urna cursus eget nunc scelerisque.
      </Text>
      <Box css={{ textAlign: 'center' }}>
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
