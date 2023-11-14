import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  children: string;
};

function ExpandableText({ children }: Props) {
  const [expand, setExpand] = useState(false);
  const CHAR_LIMIT = 1000;
  const text = expand ? children : children.substring(0, CHAR_LIMIT) + '...';
  const textButton = expand ? 'Show More' : 'Show Less';

  if (!children) return null;

  return (
    <Text>
      {text}
      <Button
        onClick={() => setExpand(!expand)}
        size="xs"
        fontWeight="bold"
        ml=".5rem"
        colorScheme="orange"
      >
        {textButton}
      </Button>
    </Text>
  );
}

export default ExpandableText;
