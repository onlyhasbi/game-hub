import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import ApiClient from '../services/api-client';

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
    initialData: platforms
  });

export default usePlatforms;
