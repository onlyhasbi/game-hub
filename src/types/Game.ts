import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publisher } from './Publisher';

export type Game = {
  id: number;
  name: string;
  description_raw: string;
  platforms: {
    platform: Platform;
  }[];
  genres: Genre[];
  metacritic: number;
  publishers: Publisher[];
};
