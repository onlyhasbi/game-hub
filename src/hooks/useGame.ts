import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';
import { Game } from '../types/Game';

const apiClient = new ApiClient<Game>('/games');

const useGameDetail = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGameDetail;
