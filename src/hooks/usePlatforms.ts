import platforms from '../data/platforms';
import ApiClient from '../services/api-client';
import ms from 'ms'
import { useQuery } from '@tanstack/react-query';
import { Platform } from '../types/Platform';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  });

export default usePlatforms;
