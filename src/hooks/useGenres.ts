import genres from '../data/genres';
import ApiClient from '../services/api-client';
import ms from 'ms'
import { useQuery } from '@tanstack/react-query';
import { Genre } from '../types/Genre';

const apiClient = new ApiClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
