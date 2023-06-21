import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) {
    return (
      <Box mt={5}>
        {[1, 2, 3].map((item) => (
          <SkeletonText height="100px" paddingY={3} key={item} />
        ))}
      </Box>
    );
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
