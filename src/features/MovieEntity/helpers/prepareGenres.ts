import { TGenre } from '@/types/genre';

const prepareGenres = (genres: TGenre[], ids?: number[]): string => {
  if (ids) {
    return ids
      .map((id) => genres.find((genre) => genre.id === id)!)
      .map(({ name }) => name)
      .join(', ');
  }

  return genres.map(({ name }) => name).join(', ');
};

export default prepareGenres;
