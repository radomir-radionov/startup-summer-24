'use client';

import { Pagination } from '@/components';
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
    <>
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
    </>
  );
};

export default MoviesPage;
