import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import { Platform } from './hooks/useGames';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import SearchInput from './components/SearchInput';
import GameHeading from './components/GameHeading';
import './app.css';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      gridTemplateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      gridTemplateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav" padding={3}>
        <NavBar>
          <SearchInput
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({
                ...gameQuery,
                genre,
              })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={3} marginY={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
