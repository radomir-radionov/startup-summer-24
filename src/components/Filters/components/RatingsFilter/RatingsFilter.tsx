'use client';

import { Group, NumberInputHandlers, Stack, Text } from '@mantine/core';
import classes from './RatingsFilter.module.css';
import { ButtonIcon, NumberInput } from '@/components/ui';
import { useDebounce, useFiltersParams } from '@/hooks';
import Icons from '@/assets/icons';
import { ChangeEvent, RefObject, useRef } from 'react';

import { UseFormReturnType } from '@mantine/form';
import { TFormValues } from '../../Filters';

type TProps = {
  form: UseFormReturnType<TFormValues>;
};

const RatingsFilter = ({ form }: TProps) => {
  const inputFromRef = useRef<NumberInputHandlers>(null);
  const inputToRefRef = useRef<NumberInputHandlers>(null);
  const { onFilterParamChange } = useFiltersParams();
  const debouncedFilterParamChange = useDebounce(onFilterParamChange, 600);

  const handleGteChange = (
    value: string | number | ChangeEvent<HTMLInputElement>
  ) => {
    !form.errors['rating.voteAverageGte'] &&
      debouncedFilterParamChange(`${value}`, 'vote_average.gte');
    form.setFieldValue('rating.voteAverageGte', value as number);
  };

  const handleLteChange = (
    value: string | number | ChangeEvent<HTMLInputElement>
  ) => {
    !form.errors['rating.voteAverageLte'] &&
      debouncedFilterParamChange(`${value}`, 'vote_average.lte');
    form.setFieldValue('rating.voteAverageLte', value as number);
  };

  const numberInputRightSection = (
    variantRef: RefObject<NumberInputHandlers>
  ) => (
    <Stack gap={2}>
      <ButtonIcon onClick={() => variantRef.current?.increment()}>
        <Icons.chevronButtonIcon />
      </ButtonIcon>
      <ButtonIcon
        outerStyles={classes.chevronDownButtonIcon}
        onClick={() => variantRef.current?.decrement()}
      >
        <Icons.chevronButtonIcon />
      </ButtonIcon>
    </Stack>
  );

  return (
    <Stack gap={8}>
      <Text component="label" className={classes.labelRatings}>
        Ratings:
      </Text>
      <Group gap={8}>
        <NumberInput
          {...form.getInputProps('rating.voteAverageGte')}
          onChange={(value) => handleGteChange(value)}
          placeholder="From"
          handlersRef={inputFromRef}
          min={0}
          max={10}
          allowDecimal={false}
          rightSection={numberInputRightSection(inputFromRef)}
          error={form.errors['rating.voteAverageGte']}
        />
        <NumberInput
          {...form.getInputProps('rating.voteAverageLte')}
          onChange={(value) => handleLteChange(value)}
          placeholder="To"
          handlersRef={inputToRefRef}
          min={0}
          max={10}
          allowDecimal={false}
          rightSection={numberInputRightSection(inputToRefRef)}
          error={form.errors['rating.voteAverageLte']}
        />
      </Group>
    </Stack>
  );
};

export default RatingsFilter;
