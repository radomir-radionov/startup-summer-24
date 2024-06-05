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
import prepareGenres from './helpers/prepareGenres';

type TProps = {
  genres: TGenre[];
};

export type TFormValues = {
  genresIds: string[];
  releaseYear: string | null;
  rating: {
    voteAverageGte: number | string;
    voteAverageLte: number | string;
  };
};

const Filters = ({ genres }: TProps) => {
  const searchParams = useSearchParams();
  const { onFiltersParamsReset } = useFiltersParams();

  const form = useForm({
    initialValues: {
      genresIds: searchParams.get('with_genres')?.toString().split(',') || [],
      releaseYear: searchParams.get('primary_release_year'),
      rating: {
        voteAverageGte: searchParams.get('vote_average.gte')
          ? +searchParams.get('vote_average.gte')!
          : '',
        voteAverageLte: searchParams.get('vote_average.lte')
          ? +searchParams.get('vote_average.lte')!
          : '',
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

  const {
    genresIds,
    releaseYear,
    rating: { voteAverageGte, voteAverageLte },
  } = form.values;

  const isFiltred = !(
    genresIds.length ||
    releaseYear ||
    voteAverageGte ||
    voteAverageLte
  );

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

  console.log(111, form.values.genresIds);

  return (
    <Flex align="flex-end" gap="md" wrap="wrap">
      <GenresFilter form={form} options={prepareGenres(genres)} />
      <ReleaseYearFilter form={form} options={prepareReleaseYears()} />
      <RatingsFilter form={form} />
      <Button
        variant="subtle"
        onClick={handleButtonResetClick}
        disabled={isFiltred}
      >
        Reset filters
      </Button>
    </Flex>
  );
};

export default Filters;
