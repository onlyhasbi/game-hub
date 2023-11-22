import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

type Props = {
  term: string;
  children: React.ReactNode;
};

function DefinitionItem({ term, children }: Props) {
  return (
    <Box w="10rem">
      <Heading as="dt" fontSize="md" color="gray.600" my={1}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
