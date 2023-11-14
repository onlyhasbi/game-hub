import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameDetail } from '../types/GameDetail';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

type Props = {
  game: GameDetail;
};

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid as="dl" columns={2} mt={5}>
      <DefinitionItem term="Pubilsher">
        {game.platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publisher">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
