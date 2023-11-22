import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import useGameQuery from '../store/useGameQuery';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  const setSearchText = useGameQuery((s) => s.setSearchText);

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image cursor="pointer" src={logo} objectFit="cover" boxSize="60px" />
      </Link>
      <SearchInput onSearch={setSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
