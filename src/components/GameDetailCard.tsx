import { GridItem, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { Game } from '../types/Game';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';
import GameScreenshoot from './GameScreenshoot';
import GameTrailer from './GameTrailer';

type Props = {
  game: Game;
};

function GameDetailCard({ game }: Props) {
  return (
      <SimpleGrid columns={{ md: 2 }} spacing={10} padding={10}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem order={{ md: 0 }}>
          <VStack gap={5}>
            <GameTrailer gameId={game.id} />
            <GameScreenshoot gameId={game.id} />
          </VStack>
        </GridItem>
      </SimpleGrid>
  );
}

export default GameDetailCard;
