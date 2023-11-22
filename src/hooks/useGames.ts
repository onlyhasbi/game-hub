<<<<<<< HEAD
import { GameQuery } from '../App';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
=======
import { useInfiniteQuery } from '@tanstack/react-query';
import Platform  from '../types/Platform';
import ApiClient, { FetchResponse } from '../services/api-client';
import useGameQuery from '../store/useGameQuery';

import ms from 'ms';
>>>>>>> main

export interface Game {
  id: number;
  name: string;
<<<<<<< HEAD
=======
  slug: string;
>>>>>>> main
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

<<<<<<< HEAD
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
=======
const apiClient = new ApiClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
>>>>>>> main

export default useGames;
