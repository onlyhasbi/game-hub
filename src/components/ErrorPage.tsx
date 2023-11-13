import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from './NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  const isErrorPath = isRouteErrorResponse(error);

  return (
    <>
      <NavBar />
      <Center h="100vh">
        <Box textAlign="center">
          <Heading mb={1}>{isErrorPath ? 'Oops' : 'Sorry,'}</Heading>
          <Text>
            {isErrorPath
              ? 'This page does not exist'
              : 'Unexpected error occurred'}
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default ErrorPage;
