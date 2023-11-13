import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

type DetailGameQueryStore = {
  gameId?: string;
  setGameId?: (id: string) => void;
};

const useDetailGameQuery = create<DetailGameQueryStore>((set) => ({
  gameId: '',
  setGameId: (id) =>
    set(() => ({
      gameId: id,
    })),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Game Query', useDetailGameQuery);
}

export default useDetailGameQuery;
