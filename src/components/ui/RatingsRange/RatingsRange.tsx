'use client';

import { Group } from '@mantine/core';
import NumberInput from '../NumberInput/NumberInput';
import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from 'react';
import classes from './RatingsRange.module.css';
import Icons from '@/assets/icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// type TProps = {
//   rating: {
//     from?: number;
//     to?: number;
//   };
//   onChange: Dispatch<
//     SetStateAction<{
//       from?: number;
//       to?: number;
//     }>
//   >;
// };

const RatingsRange = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleRatingChange = (
    type: 'gte' | 'lte',
    value: string | number | ChangeEvent<HTMLInputElement>
  ) => {
    const params = new URLSearchParams(searchParams);
    const val = typeof value === 'object' ? value.target.value : value;

    if (val) {
      params.set(`vote_average.${type}`, `${val}`);
    } else {
      params.delete(`vote_average.${type}`);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={classes.container}>
      <label className={classes.labelRatings}>Ratings:</label>
      <Group gap={8}>
        <NumberInput
          onChange={(value) => handleRatingChange('gte', value)}
          placeholder="From"
          min={0}
          max={10}
          allowDecimal={false}
          defaultValue={searchParams.get('vote_average.gte')?.toString()}
        />
        <NumberInput
          onChange={(value) => handleRatingChange('lte', value)}
          placeholder="To"
          min={0}
          max={10}
          allowDecimal={false}
          defaultValue={searchParams.get('vote_average.lte')?.toString()}
        />
      </Group>
    </div>
  );
};

export default RatingsRange;
