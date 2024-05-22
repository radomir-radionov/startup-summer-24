'use client';

import { Group } from '@mantine/core';
import classes from './RatingsFilter.module.css';
import { NumberInput } from '@/components/ui';
import { useFiltersParams } from '@/hooks';

type TProps = {
  form: any;
  gteValue?: string;
  lteValue?: string;
};

const RatingsFilter = ({ form, gteValue, lteValue }: TProps) => {
  const { onFilterParamChange } = useFiltersParams();

  return (
    <div className={classes.container}>
      <label className={classes.labelRatings}>Ratings:</label>
      <Group gap={8}>
        <NumberInput
          value={gteValue}
          onChange={(value) => {
            form.setFieldValue('rating.voteAverageGte', value);
            // onFilterParamChange(`${value}`, 'vote_average.gte');
          }}
          placeholder="From"
          min={0}
          max={10}
          allowDecimal={false}
          error={form.errors['rating.voteAverageGte']}
        />
        <NumberInput
          value={lteValue}
          onChange={(value) => {
            form.setFieldValue('rating.voteAverageLte', value);
            // onFilterParamChange(`${value}`, 'vote_average.lte');
          }}
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
