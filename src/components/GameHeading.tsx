import { Heading } from '@chakra-ui/react';
<<<<<<< HEAD
import { GameQuery } from '../App';

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl">
=======
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQuery from '../store/useGameQuery';

const GameHeading = () => {
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
>>>>>>> main
      {heading}
    </Heading>
  );
};

export default GameHeading;
