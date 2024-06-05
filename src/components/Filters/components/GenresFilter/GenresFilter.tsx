'use client';

import { Dropdown } from '@/components/ui';
import { useFiltersParams } from '@/hooks';
import { UseFormReturnType } from '@mantine/form';
import { TFormValues } from '../../Filters';

type TProps = {
  form: UseFormReturnType<TFormValues>;
  options: TPreparedGenre[];
};

type TPreparedGenre = { id: number; value: string; label: string };

const GenresFilter = ({ form, options }: TProps) => {
  const { onFilterParamChange } = useFiltersParams();

  const value = form.values.genresIds;

  const handleOptionSubmit = (currId: string) => {
    const updatedGenres = value.includes(currId)
      ? value.filter((id) => id !== currId)
      : [...value, currId];

    form.setFieldValue('genresIds', updatedGenres);
    onFilterParamChange(updatedGenres.join(','), 'with_genres');
  };

  const handleOptionRemove = (currId: number) => {
    const filtredGenresIds = value.filter((id) => id !== `${currId}`);

    form.setFieldValue('genresIds', filtredGenresIds);
    onFilterParamChange(filtredGenresIds.join(','), 'with_genres');
  };

  return (
    <Dropdown
      {...form.getInputProps('genresIds')}
      value={value}
      data={options}
      label="Genres"
      placeholder={!value.length ? 'Select genre' : ''}
      onChange={handleOptionSubmit}
      onRemove={handleOptionRemove}
    />
  );
};

export default GenresFilter;
