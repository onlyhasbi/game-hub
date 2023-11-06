import genres from '../data/genres';
import ApiClient from '../services/api-client';
import ms from 'ms'
import { useQuery } from '@tanstack/react-query';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.get,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
