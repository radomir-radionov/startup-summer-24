'use client';

import { Filters, Pagination, Sorters } from '@/components';
import { Flex, Stack, Title } from '@mantine/core';
import { Movies } from '../..';
import { TMovie } from '@/types/movie';
import { TGenre } from '@/types/genre';
import { ratedMoviesService } from '@/services';
import { useEffect, useState } from 'react';

type TProps = {
  movies: TMovie[];
  genres: TGenre[];
  totalItems: number;
};

const MoviesPage = ({ movies, genres, totalItems }: TProps) => {
  const [ratedMovies, setRatedMovies] = useState<TMovie[]>([]);

  const updates = new Map(ratedMovies.map((item) => [item.id, item]));
  const mergedAMovies = movies.map((item) => updates.get(item.id) || item);

  useEffect(() => {
    setRatedMovies(ratedMoviesService.getRatedMovies());
  }, []);

  return (
    <Flex direction="column" gap={40} maw={980}>
      <Title>Movies</Title>
      <Stack gap={24}>
        <Filters genres={genres} />
        <Sorters />
        <Movies movies={mergedAMovies} genres={genres} />
        <Pagination
          totalItems={totalItems}
          itemsPerPage={20}
          contentPosition="flex-end"
        />
      </Stack>
    </Flex>
  );
};

export default MoviesPage;
