import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const { name, background_image, parent_platforms, metacritic } = game;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={background_image} />
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
