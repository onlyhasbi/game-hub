import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
};

type GameQueryStore = {
  gameQuery: GameQuery;
  setGenreId: (genre: number) => void;
  setPlatformId: (platform: number) => void;
  setSortOrder: (orderType: string) => void;
  setSearchText: (text: string) => void;
};

const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (text: string) =>
    set(() => ({ gameQuery: { searchText: text } })),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Game Query', useGameQuery);
}

export default useGameQuery;
