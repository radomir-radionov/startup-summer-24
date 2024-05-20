import { TMovie } from '@/types/movie';

const getRatedMovies = (): TMovie[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedData = localStorage.getItem('ratedMovies');
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error('Failed to retrieve rated movies:', error);
    return [];
  }
};

const addRatedMovie = (movie: TMovie, rating: number) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const storedData = localStorage.getItem('ratedMovies');
    const ratedMovies = storedData ? JSON.parse(storedData) : [];

    ratedMovies.push({ ...movie, rating });

    localStorage.setItem('ratedMovies', JSON.stringify(ratedMovies));
  } catch (error) {
    console.error('Failed to add rating:', error);
  }
};

const updateRatedMovie = (movieId: number, newRating: number) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const storedData = localStorage.getItem('ratedMovies');
    let ratedMovies = storedData ? JSON.parse(storedData) : [];

    const index = ratedMovies.findIndex((item: TMovie) => item.id === movieId);

    if (index !== -1) {
      ratedMovies[index].rating = newRating;
      localStorage.setItem('ratedMovies', JSON.stringify(ratedMovies));
    } else {
      console.log('Movie not found, no update performed.');
    }
  } catch (error) {
    console.error('Failed to update movie rating:', error);
  }
};

const deleteRatedMovie = (movieId: number) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const storedData = localStorage.getItem('ratedMovies');
    let ratedMovies = storedData ? JSON.parse(storedData) : [];

    const filteredMovies = ratedMovies.filter(
      ({ id }: TMovie) => id !== movieId
    );

    localStorage.setItem('ratedMovies', JSON.stringify(filteredMovies));
  } catch (error) {
    console.error('Failed to delete movie:', error);
  }
};

const ratedMoviesService = {
  getRatedMovies,
  addRatedMovie,
  updateRatedMovie,
  deleteRatedMovie,
};

export default ratedMoviesService;
