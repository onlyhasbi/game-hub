import { Badge } from '@chakra-ui/react';

<<<<<<< HEAD
type Props = {
  score: number;
};

function CriticScore({ score }: Props) {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
=======
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
>>>>>>> main

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> main

export default CriticScore;
