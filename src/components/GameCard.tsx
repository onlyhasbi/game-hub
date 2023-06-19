import { Card, CardBody, Image, Heading } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const { name, background_image } = game;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
