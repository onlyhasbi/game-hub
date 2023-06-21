import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

// type Props = {};

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {[
          'Relevance',
          'Date added',
          'Name',
          'Popularity',
          'Average rating',
        ].map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
