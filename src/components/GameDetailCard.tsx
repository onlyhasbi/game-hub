import { Card, Heading } from '@chakra-ui/react';
import { GameDetail } from '../types/GameDetail';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';

type Props = {
  gameDetail: GameDetail;
};

function GameDetailCard({ gameDetail }: Props) {
  return (
    <Card padding={5}>
      <Heading>{gameDetail.name}</Heading>
      <ExpandableText>{gameDetail.description_raw}</ExpandableText>
      <GameAttributes game={gameDetail}/>
    </Card>
  );
}

export default GameDetailCard;
