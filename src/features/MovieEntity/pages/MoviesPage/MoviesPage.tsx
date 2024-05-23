'use client';

import { Filters, Pagination, Sorters } from '@/components';
import { Flex, Stack, Title } from '@mantine/core';
import { Movies } from '../..';
import { TMovie } from '@/types/movie';
import { TGenre } from '@/types/genre';
import { useRatedMovies } from '@/providers/RatedMoviesProvider/RatedMoviesProvider';
import { Notice } from '@/components/ui';

type TProps = {
  movies: TMovie[];
  genres: TGenre[];
  totalItems: number;
};

const MoviesPage = ({ movies, genres, totalItems }: TProps) => {
  const { ratedMovies } = useRatedMovies();

  const updates = new Map(ratedMovies.map((item) => [item.id, item]));
  const mergedAMovies = movies.map((item) => updates.get(item.id) || item);

  return (
    <Flex direction="column" gap={40} maw={980}>
      <Title order={2}>Movies</Title>
      <Stack gap={24}>
        <Filters genres={genres} />
        <Sorters />
        {movies.length ? (
          <>
            <Movies movies={mergedAMovies} genres={genres} />
            <Pagination
              totalItems={totalItems}
              itemsPerPage={20}
              contentPosition="flex-end"
            />
          </>
        ) : (
          <Notice variant="noSearchedMovies" />
        )}
      </Stack>
    </Flex>
  );
};

export default MoviesPage;
