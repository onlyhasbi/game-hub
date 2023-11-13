import { Card, Heading, Text } from '@chakra-ui/react';
import { GameDetail } from '../types/GameDetail';

type Props = {
  gameDetail: GameDetail;
};

function GameDetailCard({ gameDetail }: Props) {
  return (
    <Card padding={5}>
      <Heading>{gameDetail.name}</Heading>
      <Text>{gameDetail.description_raw}</Text>
    </Card>
  );
}

export default GameDetailCard;
