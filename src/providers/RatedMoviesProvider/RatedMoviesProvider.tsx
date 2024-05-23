'use client';

import { TMovie } from '@/types/movie';
import { ReactNode, createContext, useContext, useState } from 'react';

type TProps = {
  children: ReactNode;
};

type TRatedMovieContext = {
  ratedMovies: TMovie[];
  searchedRatedMovies: TMovie[];
  setInitialSearchedRatedMovies: () => void;
  addRatedMovie: (movie: TMovie) => void;
  getRatedMovie: (id: number) => TMovie | undefined;
  getRatedMovies: () => TMovie[];
  updateRatedMovie: (id: number, newRating: number) => void;
  updateSearchedRatedMovies: (originalTitle: string) => void;
  deleteRatedMovie: (id: number) => void;
};

const defaultContextValue: TRatedMovieContext = {
  ratedMovies: [],
  searchedRatedMovies: [],
  setInitialSearchedRatedMovies: () => [],
  addRatedMovie: () => {},
  getRatedMovie: () => undefined,
  getRatedMovies: () => [],
  updateRatedMovie: () => {},
  updateSearchedRatedMovies: () => {},
  deleteRatedMovie: () => {},
};

const MoviesContext = createContext(defaultContextValue);

const RatedMoviesProvider = ({ children }: TProps) => {
  const [ratedMovies, setMovies] = useState<TMovie[]>(() => {
    const localData = localStorage.getItem('ratedMovies');
    return localData ? JSON.parse(localData) : [];
  });

  const [searchedRatedMovies, setSearchedRatedMovies] =
    useState<TMovie[]>(ratedMovies);

  const addRatedMovie = (movie: TMovie) => {
    const updatedMovies = [...ratedMovies, movie];

    localStorage.setItem('ratedMovies', JSON.stringify(updatedMovies));

    setMovies(updatedMovies);
    setSearchedRatedMovies(updatedMovies);
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
      setSearchedRatedMovies(ratedMovies);
    } else {
      console.log('Movie not found, no update performed.');
    }
  };

  const updateSearchedRatedMovies = (originalTitle: string) => {
    setSearchedRatedMovies(
      ratedMovies?.filter((movie) =>
        movie.original_title.toLowerCase().includes(originalTitle.toLowerCase())
      )
    );
  };

  const deleteRatedMovie = (id: number) => {
    const updatedMovies = ratedMovies.filter((movie) => movie.id !== id);

    localStorage.setItem('ratedMovies', JSON.stringify(updatedMovies));
    setMovies(updatedMovies);
    setSearchedRatedMovies(updatedMovies);
  };

  const setInitialSearchedRatedMovies = () => {
    setSearchedRatedMovies(ratedMovies);
  };

  return (
    <MoviesContext.Provider
      value={{
        ratedMovies,
        searchedRatedMovies,
        setInitialSearchedRatedMovies,
        addRatedMovie,
        getRatedMovie,
        getRatedMovies,
        updateRatedMovie,
        updateSearchedRatedMovies,
        deleteRatedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useRatedMovies = () => useContext(MoviesContext);

export default RatedMoviesProvider;
