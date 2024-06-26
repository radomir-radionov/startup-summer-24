'use client';

import { Flex } from '@mantine/core';
import Card from '../Card/Card';
import { TMovie } from '@/types/movie';
import { TGenre } from '@/types/genre';

type TProps = {
  movies: TMovie[];
  genres: TGenre[];
};

const Movies = ({ movies, genres }: TProps) => {
  return (
    <Flex gap="md" wrap="wrap" mih={490}>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} genres={genres} />
      ))}
    </Flex>
  );
};

export default Movies;
