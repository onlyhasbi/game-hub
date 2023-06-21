import bullsEye from '../assets/Emojis/bulls-eye.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

type Props = {
  rating: number;
};

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojis: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: 6 },
    4: { src: thumbsUp, alt: 'recommended', boxSize: 6, marginTop: 1 },
    5: { src: bullsEye, alt: 'exceptional', boxSize: 8 },
  };

  return <Image {...emojis[rating]} />;
};

export default Emoji;
