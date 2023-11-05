import platforms from '../data/platforms';
import ApiClient, { FetchResponse } from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
