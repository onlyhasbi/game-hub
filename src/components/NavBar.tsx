import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
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

export default NavBar;
