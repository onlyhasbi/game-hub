import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
<<<<<<< HEAD

type Props = {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
};

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { label: 'Relevance', value: '' },
    { label: 'Date added', value: '-added' },
    { label: 'Name', value: 'name' },
    { label: 'Release date', value: '-released' },
    { label: 'Popularity', value: '-metacritic' },
    { label: 'Average rating', value: '-rating' },
=======
import useGameQuery from '../store/useGameQuery';

const SortSelector = () => {
  const {
    gameQuery: { sortOrder },
    setSortOrder: onSelectSortOrder,
  } = useGameQuery();

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
>>>>>>> main
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
<<<<<<< HEAD
        {`Order by: ${currentSortOrder?.label || 'Relevance'}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map(({ label, value }) => (
          <MenuItem key={value} onClick={() => onSelectSortOrder(value)}>
            {label}
=======
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
>>>>>>> main
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
