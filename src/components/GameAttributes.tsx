import { SimpleGrid, Text } from '@chakra-ui/react';
import Game from '../types/Game';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

type Props = {
  game: Game;
};

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid as="dl" spacing={8} columns={2} mt={5}>
      <DefinitionItem term="Pubilsher">
        {game?.platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={game?.metacritic || 0} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publisher">
        {game?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
