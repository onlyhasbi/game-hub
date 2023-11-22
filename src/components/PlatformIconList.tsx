import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
<<<<<<< HEAD

=======
>>>>>>> main
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
<<<<<<< HEAD
import { Platform } from '../hooks/useGames';
import { type IconType } from 'react-icons';
=======
import { IconType } from 'react-icons';
import Platform from '../types/Platform';
>>>>>>> main

interface Props {
  platforms: Platform[];
}

<<<<<<< HEAD
function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    platstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
=======
const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
>>>>>>> main
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
<<<<<<< HEAD
      {platforms.map(({ id, slug }) => (
        <Icon key={id} as={iconMap[slug]} color="gray.500" />
      ))}
    </HStack>
  );
}
=======
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};
>>>>>>> main

export default PlatformIconList;
