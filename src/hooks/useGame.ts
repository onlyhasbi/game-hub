import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';
import { GameDetail } from '../types/GameDetail';

const apiClient = new ApiClient<GameDetail>('/games');

const useGameDetail = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGameDetail;
