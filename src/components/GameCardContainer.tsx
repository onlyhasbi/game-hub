import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function GameCardContainer({ children }: Props) {
  return (
    <Box width={230} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
