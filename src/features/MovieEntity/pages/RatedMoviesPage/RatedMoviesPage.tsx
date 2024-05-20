'use client';

import { useEffect, useState } from 'react';
import { Movies } from '../..';
import { TGenre } from '@/types/genre';
import { Flex, Box, Title, Loader, Center } from '@mantine/core';
import { Pagination, SearchBar } from '@/components';
import { TMovie } from '@/types/movie';
import { Notice } from '@/components/ui';
import { useSearchParams } from 'next/navigation';
import classes from './RatedMoviesPage.module.css';

type TProps = {
  genres: TGenre[];
};
const RatedMoviesPage = ({ genres }: TProps) => {
  const searchParams = useSearchParams();
  const [ratedMovies, setRatedMovies] = useState<TMovie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentPage = searchParams.get('page') ?? 1;

  useEffect(() => {
    setIsLoading(true);

    const storedData = localStorage.getItem('ratedMovies');

    if (storedData) {
      setRatedMovies(JSON.parse(storedData));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Center h="100%">
        <Loader />
      </Center>
    );
  }

  if (!ratedMovies.length) {
    return <Notice variant="emptyState" />;
  }

  const startIndex = (+currentPage - 1) * 4;
  const endIndex = startIndex + 4;

  const movies = ratedMovies.slice(startIndex, endIndex);

  const handleOnSubmit = (value: string) => {
    if (value) {
      setRatedMovies(
        ratedMovies?.filter((movie) =>
          movie.original_title.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      const ratedMoviesJson = localStorage.getItem('ratedMovies');
      const ratedMovies = ratedMoviesJson ? JSON.parse(ratedMoviesJson) : [];
      setRatedMovies(ratedMovies);
    }
  };

  return (
    <Flex direction="column" gap={40} maw={980}>
      <Box className={classes.header}>
        <Title>Rated movies</Title>
        <SearchBar onSubmit={handleOnSubmit} />
      </Box>
      <Movies movies={movies} genres={genres} />
      <Pagination totalItems={ratedMovies.length} itemsPerPage={4} />
    </Flex>
  );
};

export default RatedMoviesPage;
