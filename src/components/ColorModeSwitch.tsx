import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

<<<<<<< HEAD
function ColorModeSwitch() {
=======
const ColorModeSwitch = () => {
>>>>>>> main
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> main

export default ColorModeSwitch;
