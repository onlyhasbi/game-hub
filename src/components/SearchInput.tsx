import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
<<<<<<< HEAD
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

type Props = {
  onSearch: (search: string) => void;
};

const SearchInput = ({ onSearch }: Props) => {
=======
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const navigate = useNavigate();
>>>>>>> main
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
<<<<<<< HEAD
        if (ref.current) {
          onSearch(ref.current.value);
        }
=======
        if (ref.current) onSearch(ref.current.value);
        navigate('/');
>>>>>>> main
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
<<<<<<< HEAD
          placeholder="Search games.."
=======
          placeholder="Search games..."
>>>>>>> main
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
