import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
<<<<<<< HEAD
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

type Props = {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
};

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
=======
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameQuery from '../store/useGameQuery';

const PlatformSelector = () => {
  const {
    gameQuery: { platformId: selectedPlatformId },
    setPlatformId: onSelectPlatform,
  } = useGameQuery();
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
>>>>>>> main

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
<<<<<<< HEAD
        {selectedPlatform ? selectedPlatform.name : 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
=======
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results?.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
>>>>>>> main
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
