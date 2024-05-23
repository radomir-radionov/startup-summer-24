import { Group } from '@mantine/core';
import classes from './RatingsFilter.module.css';
import { NumberInput } from '@/components/ui';
import { useDebounce, useFiltersParams } from '@/hooks';

type TProps = {
  form: any;
  gteValue?: string;
  lteValue?: string;
};

const RatingsFilter = ({ form, gteValue, lteValue }: TProps) => {
  const { onFilterParamChange } = useFiltersParams();
  const debouncedFilterParamChange = useDebounce(onFilterParamChange, 500);

  console.log('form.errors', form.errors);
  console.log(111, !!form.errors);

  const isErrorObjectEmpty = (obj: any) => Object.entries(obj).length === 0;

  console.log('isErrorObjectEmpty', isErrorObjectEmpty(form.errors));

  const handleGteChange = (value: string | null) => {
    if (value !== null) {
      form.setFieldValue('rating.voteAverageGte', value);

      form.errors && debouncedFilterParamChange(value, 'vote_average.gte');
    }
  };

  const handleLteChange = (value: string | null) => {
    if (value !== null) {
      form.setFieldValue('rating.voteAverageLte', value);

      form.errors && debouncedFilterParamChange(value, 'vote_average.lte');
    }
  };

  return (
    <div className={classes.container}>
      <label className={classes.labelRatings}>Ratings:</label>
      <Group gap={8}>
        <NumberInput
          value={gteValue}
          onChange={(value) => handleGteChange(value as string)}
          placeholder="From"
          min={0}
          max={10}
          allowDecimal={false}
          error={form.errors['rating.voteAverageGte']}
        />
        <NumberInput
          value={lteValue}
          onChange={(value) => handleLteChange(value as string)}
          placeholder="To"
          min={0}
          max={10}
          allowDecimal={false}
          error={form.errors['rating.voteAverageLte']}
        />
      </Group>
    </div>
  );
};

export default RatingsFilter;