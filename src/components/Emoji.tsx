<<<<<<< HEAD
import bullsEye from '../assets/Emojis/bulls-eye.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

type Props = {
  rating: number;
};
=======
import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}
>>>>>>> main

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

<<<<<<< HEAD
  const emojis: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: 6 },
    4: { src: thumbsUp, alt: 'recommended', boxSize: 6, marginTop: 1 },
    5: { src: bullsEye, alt: 'exceptional', boxSize: 8 },
  };

  return <Image {...emojis[rating]} />;
=======
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
>>>>>>> main
};

export default Emoji;
