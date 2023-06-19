import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error ? <Text>{error}</Text> : null}
      <ul>
        {games.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
