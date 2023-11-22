import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './app.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import Genre from './types/Genre';
import Platform from './types/Platform';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  return (
    <Grid
      gridTemplateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      gridTemplateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav" padding={3}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <HStack spacing={3} marginY={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
