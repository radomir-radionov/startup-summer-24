import { Dropdown } from '@/components/ui';
import { useFiltersParams } from '@/hooks';

type TProps = {
  formKey: string;
  value: string[];
  options: TPreparedGenre[];
};

type TPreparedGenre = { id: number; value: string; label: string };

const GenresFilter = ({ formKey, value, options }: TProps) => {
  const { onFilterParamChange } = useFiltersParams();

  const handleOptionSubmit = (currId: string) => {
    const updatedGenres = value.includes(currId)
      ? value.filter((id) => id !== currId)
      : [...value, currId];

    onFilterParamChange(updatedGenres.join(','), 'with_genres');
  };

  const handleOptionRemove = (currId: number) => {
    const filtredGenresIds = value.filter((id) => id !== `${currId}`);

    onFilterParamChange(filtredGenresIds.join(','), 'with_genres');
  };

  return (
    <Dropdown
      key={formKey}
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
