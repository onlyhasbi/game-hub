import { Box } from '@chakra-ui/react';
<<<<<<< HEAD
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}
=======
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
    >
      {children}
    </Box>
  );
};
>>>>>>> main

export default GameCardContainer;
