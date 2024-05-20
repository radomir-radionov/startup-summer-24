'use client';

import { TMovie } from '@/types/movie';
import { ReactNode, createContext, useContext, useState } from 'react';

type TProps = {
  children: ReactNode;
};

type TRatedMovieContext = {
  ratedMovies: TMovie[];
  addRatedMovie: (movie: TMovie) => void;
  getRatedMovie: (id: number) => TMovie | undefined;
  getRatedMovies: () => TMovie[];
  updateRatedMovie: (id: number, newRating: number) => void;
  deleteRatedMovie: (id: number) => void;
};

const defaultContextValue: TRatedMovieContext = {
  ratedMovies: [],
  addRatedMovie: () => {},
  getRatedMovie: () => undefined,
  getRatedMovies: () => [],
  updateRatedMovie: () => {},
  deleteRatedMovie: () => {},
};

const MoviesContext = createContext(defaultContextValue);

const RatedMoviesProvider = ({ children }: TProps) => {
  const [ratedMovies, setMovies] = useState<TMovie[]>(() => {
    const localData = localStorage.getItem('ratedMovies');
    return localData ? JSON.parse(localData) : [];
  });

  const addRatedMovie = (movie: TMovie) => {
    const updatedMovies = [...ratedMovies, movie];

    localStorage.setItem('ratedMovies', JSON.stringify(updatedMovies));
    setMovies(updatedMovies);
  };

  const getRatedMovies = () => ratedMovies;

  const getRatedMovie = (id: number) =>
    ratedMovies.find((movie) => movie.id === id);

  const updateRatedMovie = (id: number, newRating: number) => {
    const index = ratedMovies.findIndex((item: TMovie) => item.id === id);

    if (index !== -1) {
      ratedMovies[index].rating = newRating;

      localStorage.setItem('ratedMovies', JSON.stringify(ratedMovies));
      setMovies(ratedMovies);
    } else {
      console.log('Movie not found, no update performed.');
    }
  };

  const deleteRatedMovie = (id: number) => {
    const updatedMovies = ratedMovies.filter((movie) => movie.id !== id);

    localStorage.setItem('ratedMovies', JSON.stringify(updatedMovies));
    setMovies(updatedMovies);
  };

  return (
    <MoviesContext.Provider
      value={{
        ratedMovies,
        addRatedMovie,
        getRatedMovie,
        getRatedMovies,
        updateRatedMovie,
        deleteRatedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useRatedMovies = () => useContext(MoviesContext);

export default RatedMoviesProvider;
