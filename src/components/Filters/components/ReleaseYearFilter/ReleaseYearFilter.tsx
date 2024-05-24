import { Select } from '@/components/ui';
import { useFiltersParams } from '@/hooks';

type TProps = {
  formKey: string;
  options: string[];
  value?: string;
};

const ReleaseYearFilter = ({ formKey, options, value }: TProps) => {
  const { onFilterParamChange } = useFiltersParams();

  const handleReleaseYearChange = (value: string | null) =>
    onFilterParamChange(value, 'primary_release_year');

  return (
    <Select
      key={formKey}
      value={value}
      data={options}
      onChange={handleReleaseYearChange}
      label="Release year"
      placeholder="Select release year"
    />
  );
};

export default ReleaseYearFilter;
