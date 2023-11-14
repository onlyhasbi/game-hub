import { Center, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import GameDetailCard from '../components/GameDetailCard';

function GameDetailPage() {
  const { slug } = useParams();
  const { data, error, isSuccess, isLoading, isError } = useGame(slug!);

  if (isLoading) {
    return (
      <Center>
        <Spinner size="lg" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center>
        <Text>{error.message}</Text>
      </Center>
    );
  }

  return isSuccess ? (
    <GameDetailCard
      gameDetail={{
        name: data?.name,
        description_raw: data?.description_raw,
        platforms: data.platforms,
        genres: data.genres,
        metacritic: data.metacritic,
        publishers: data.publishers,
      }}
    />
  ) : null;
}

export default GameDetailPage;
