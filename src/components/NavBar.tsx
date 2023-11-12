import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import useGameQuery from '../store/useGameQuery';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  const setSearchText = useGameQuery((s) => s.setSearchText);

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={setSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
