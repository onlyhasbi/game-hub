import { GridItem, Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshoot';

type Props = {
  gameId: number;
};

function GameScreenshoot({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);
  const images = data?.results;

  if (isLoading) return null;
  if (error) throw error;

  return images ? (
    <SimpleGrid columns={{ md: 2 }} spacing={2}>
      {images.map(({ id, image }) => (
        <GridItem key={id}>
          <Image src={image} alt={`screenshoot-${id}`} />
        </GridItem>
      ))}
    </SimpleGrid>
  ) : null;
}

export default GameScreenshoot;
