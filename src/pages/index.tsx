import { CSS } from '@/app';
import { Text } from '@/modules/elements';
import { Box } from '@/modules/layout';

const center: CSS = {
  top: '50%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
};

export default function Index() {
  return (
    <Box css={center}>
      <Text h3>
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
    </Box>
  );
}
