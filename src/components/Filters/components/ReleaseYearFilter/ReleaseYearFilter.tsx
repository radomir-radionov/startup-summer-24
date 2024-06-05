'use client';

import { Select } from '@/components/ui';
import { useFiltersParams } from '@/hooks';
import { UseFormReturnType } from '@mantine/form';
import { TFormValues } from '../../Filters';

type TProps = {
  form: UseFormReturnType<TFormValues>;
  options: string[];
};

const ReleaseYearFilter = ({ form, options }: TProps) => {
  const { onFilterParamChange } = useFiltersParams();

  // TODO: add types
  const handleReleaseYearChange = (value: any) => {
    onFilterParamChange(value, 'primary_release_year');
    form.setFieldValue('releaseYear', value);
  };

  return (
    <Select
      {...form.getInputProps('releaseYear')}
      data={options}
      label="Release year"
      placeholder="Select release year"
      onChange={handleReleaseYearChange}
    />
  );
};

export default ReleaseYearFilter;
