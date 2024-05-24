'use client';

import { Button } from '../ui';
import { TGenre } from '@/types/genre';
import prepareReleaseYears from './helpers/prepareReleaseYears';
import { useSearchParams } from 'next/navigation';
import { Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFiltersParams } from '@/hooks';
import { GenresFilter, RatingsFilter, ReleaseYearFilter } from '..';
import { useEffect, useMemo } from 'react';

type TProps = {
  genres: TGenre[];
};

export type TFormValues = {
  genresIds: string[];
  releaseYear: string | undefined;
  rating: {
    voteAverageGte: number | undefined;
    voteAverageLte: number | undefined;
  };
};

const Filters = ({ genres }: TProps) => {
  const searchParams = useSearchParams();
  const { onFiltersParamsReset } = useFiltersParams();

  const preparedGenres = genres.map((genre) => ({
    id: genre.id,
    value: genre.id.toString(),
    label: genre.name,
  }));

  const form = useForm({
    initialValues: {
      genresIds: searchParams.get('with_genres')?.toString().split(',') || [],
      releaseYear: searchParams.get('primary_release_year')?.toString(),
      rating: {
        voteAverageGte: searchParams.get('vote_average.gte')
          ? parseFloat(searchParams.get('vote_average.gte')!)
          : undefined,
        voteAverageLte: searchParams.get('vote_average.lte')
          ? parseFloat(searchParams.get('vote_average.lte')!)
          : undefined,
      },
    },
    validateInputOnChange: true,
    validate: {
      rating: {
        voteAverageGte: (value, values) => {
          if (
            value !== undefined &&
            values.rating.voteAverageLte !== undefined
          ) {
            const gte = parseFloat(value.toString());
            const lte = parseFloat(values.rating.voteAverageLte.toString());

            if (gte > lte) {
              return 'GTE must be less than or equal to LTE';
            }
          }
        },
        voteAverageLte: (value, values) => {
          if (
            value !== undefined &&
            values.rating.voteAverageGte !== undefined
          ) {
            const lte = parseFloat(value.toString());
            const gte = parseFloat(values.rating.voteAverageGte.toString());

            if (lte < gte) return 'LTE must be greater than or equal to GTE';
          }
        },
      },
    },
  });

  const noValues =
    !form.values.genresIds.length &&
    !form.values.releaseYear &&
    !form.values.rating.voteAverageGte &&
    !form.values.rating.voteAverageLte;

  const formIsValid = useMemo(
    () => Object.keys(form.errors).length === 0,
    [form.errors]
  );

  const handleButtonResetClick = () => {
    onFiltersParamsReset('sort_by');
    form.reset();
  };

  useEffect(() => {
    form.validateField('rating.voteAverageGte');
    form.validateField('rating.voteAverageLte');
  }, [form.values.rating.voteAverageGte, form.values.rating.voteAverageLte]);

  return (
    <Flex align="flex-end" gap="md" wrap="wrap">
      <GenresFilter
        formKey={form.key('genresIds')}
        value={form.values.genresIds}
        options={preparedGenres}
      />
      <ReleaseYearFilter
        formKey={form.key('releaseYear')}
        value={form.values.releaseYear}
        options={prepareReleaseYears()}
      />
      <RatingsFilter
        form={form}
        gteValue={form.values.rating.voteAverageGte}
        lteValue={form.values.rating.voteAverageLte}
      />
      <Button
        variant="subtle"
        onClick={handleButtonResetClick}
        disabled={noValues || !formIsValid}
      >
        Reset filters
      </Button>
    </Flex>
  );
};

export default Filters;
