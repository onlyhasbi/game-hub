import genres from '../data/genres';
<<<<<<< HEAD

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });
=======
import ApiClient from '../services/api-client';
import ms from 'ms'
import { useQuery } from '@tanstack/react-query';
import  Genre  from '../types/Genre';

const apiClient = new ApiClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });
>>>>>>> main

export default useGenres;
