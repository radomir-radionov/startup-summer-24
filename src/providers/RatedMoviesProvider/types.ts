import { TMovie } from '@/types/movie';
import { Dispatch, SetStateAction } from 'react';

export type TRatedMovieContext = {
  ratedMovies: TMovie[];
  setRatedMovies: Dispatch<SetStateAction<TMovie[]>>;
  addRatedMovie: (movie: TMovie) => void;
  getRatedMovie: (id: number) => TMovie | undefined;
  getRatedMovies: () => TMovie[];
  updateRatedMovie: (id: number, newRating: number) => void;
  deleteRatedMovie: (id: number) => void;
};
