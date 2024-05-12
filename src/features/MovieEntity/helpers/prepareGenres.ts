import { TGenre } from '@/types/genre';

const prepareGenres = (genres: TGenre[], ids?: number[]): string => {
  console.log(ids);
  if (ids) {
    return ids
      .map((id) => genres.find((genre) => genre.id === id)!)
      .map(({ name }) => name)
      .join(', ');
  }

  return genres.map(({ name }) => name).join(', ');
};

export default prepareGenres;
