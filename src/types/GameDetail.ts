import { Genre } from './Genre';
import { Platform } from './Platform';

type PlatformsItem = {
  platform: Platform;
};

type Publisher = Platform;

export type GameDetail = {
  name: string;
  description_raw: string;
  platforms: PlatformsItem[];
  genres: Genre[];
  metacritic: number;
  publishers: Publisher[];
};
