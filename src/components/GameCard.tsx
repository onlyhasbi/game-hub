import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const { name, background_image, parent_platforms, metacritic, rating_top } =
    game;

  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {name} <Emoji rating={rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
