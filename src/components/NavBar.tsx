import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
<<<<<<< HEAD
import ColorModeSwitch from './ColorModeSwitch';

type Props = {
  children: React.ReactNode;
};

function NavBar({ children }: Props) {
  return (
    <HStack justifyContent="space-evenly" pr={3}>
      <Image src={logo} boxSize="60px" />
      {children}
      <ColorModeSwitch />
    </HStack>
  );
}
=======
import useGameQuery from '../store/useGameQuery';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  const setSearchText = useGameQuery((s) => s.setSearchText);

  return (
    <HStack padding="10px">
      <Image cursor="pointer" src={logo} objectFit="cover" boxSize="60px" />
      <SearchInput onSearch={setSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
};
>>>>>>> main

export default NavBar;
