'use client';

import { Movies } from '../..';
import { TGenre } from '@/types/genre';
import { Flex, Box, Title, Stack } from '@mantine/core';
import { Pagination, SearchBar } from '@/components';
import { Notice } from '@/components/ui';
import { useSearchParams } from 'next/navigation';
import classes from './RatedMoviesPage.module.css';
import { useRatedMovies } from '@/providers/RatedMoviesProvider/RatedMoviesProvider';

type TProps = {
  genres: TGenre[];
};

const RatedMoviesPage = ({ genres }: TProps) => {
  const searchParams = useSearchParams();
  const {
    ratedMovies,
    searchedRatedMovies,
    setInitialSearchedRatedMovies,
    updateSearchedRatedMovies,
  } = useRatedMovies();

  const currentPage = searchParams.get('page') ?? 1;
  const startIndex = (+currentPage - 1) * 4;
  const endIndex = startIndex + 4;

  const movies = searchedRatedMovies.slice(startIndex, endIndex);

  const handleOnSubmit = (value: string) => {
    if (value) {
      updateSearchedRatedMovies(value);
    } else {
      setInitialSearchedRatedMovies();
    }
  };

  console.log('searchedRatedMovies', searchedRatedMovies);

  if (!ratedMovies.length) return <Notice variant="emptyState" />;

  return (
    <Flex direction="column" gap={40} maw={980}>
      <Box className={classes.header}>
        <Title order={2}>Rated movies</Title>
        <SearchBar onSubmit={handleOnSubmit} />
      </Box>
      {searchedRatedMovies.length ? (
        <>
          <Movies movies={movies} genres={genres} />
          <Pagination
            totalItems={searchedRatedMovies.length}
            itemsPerPage={4}
          />
        </>
      ) : (
        <Notice variant="noSearchedMovies" />
      )}
    </Flex>
  );
};

export default RatedMoviesPage;
