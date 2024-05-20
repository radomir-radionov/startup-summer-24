'use client';

import { useEffect, useState } from 'react';
import { Button, Dropdown, RatingsRange, Select } from '../ui';
import { TGenre } from '@/types/genre';
import generatePrimaryReleaseYears from './helpers/generatePrimaryReleaseYears';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Flex } from '@mantine/core';

type TProps = {
  genres: TGenre[];
};

const Filters = ({ genres }: TProps) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [genresIds, setGenresIds] = useState<string[]>([]);

  const primaryReleaseYears = generatePrimaryReleaseYears();

  const setUrlParams = (value: string | null) => {
    const params = new URLSearchParams(searchParams);

    value ? params.set('with_genres', value) : params.delete('with_genres');

    replace(`${pathname}?${params.toString()}`);
  };

  const handleReleaseDateChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);

    value
      ? params.set('primary_release_year', value)
      : params.delete('primary_release_year');

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setUrlParams(genresIds.toString());
  }, [genresIds, setUrlParams]);

  return (
    <Flex align="flex-end" gap={16}>
      <Dropdown
        label="Genres"
        placeholder={!genresIds.length ? 'Select genre' : ''}
        data={genres.map((genre) => ({
          id: genre.id,
          value: genre.id.toString(),
          label: genre.name,
        }))}
        value={genresIds}
        onChange={setGenresIds}
        defaultValue={searchParams.get('with_genres')?.toString()}
      />
      <Select
        onChange={handleReleaseDateChange}
        label="Release year"
        placeholder="Select release year"
        data={primaryReleaseYears}
        defaultValue={searchParams.get('primary_release_year')?.toString()}
      />
      <RatingsRange />
      <Button variant="subtle">Reset filters</Button>
    </Flex>
  );
};

export default Filters;
