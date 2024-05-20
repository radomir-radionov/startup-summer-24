'use client';

import { Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Button, TextInput } from '../ui';
import Icons from '@/assets/icons';

type TProps = { onSubmit: (value: string) => void };

const SearchBar = ({ onSubmit }: TProps) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      searchText: '',
    },
  });

  return (
    <Box w="100%" maw={490}>
      <form onSubmit={form.onSubmit(({ searchText }) => onSubmit(searchText))}>
        <TextInput
          placeholder="Search movie title"
          rightSection={
            <Button type="submit" variant="filled">
              Search
            </Button>
          }
          leftSection={<Icons.searchIcon />}
          key={form.key('searchText')}
          {...form.getInputProps('searchText')}
        />
      </form>
    </Box>
  );
};

export default SearchBar;
