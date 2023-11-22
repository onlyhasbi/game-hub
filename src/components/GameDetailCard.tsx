import { Card, Heading } from '@chakra-ui/react';
import { Game } from '../types/Game';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';
import GameTrailer from './GameTrailer';
import GameScreenshoot from './GameScreenshoot';

type Props = {
  game: Game;
};

function GameDetailCard({ game }: Props) {
  return (
    <Card padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshoot gameId={game.id} />
    </Card>
  );
}

export default GameDetailCard;
