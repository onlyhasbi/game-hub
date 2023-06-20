import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const { name, background_image, parent_platforms, metacritic } = game;

  return (
    <Card width={230} borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
