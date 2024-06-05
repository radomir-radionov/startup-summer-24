import { TGenre } from '@/types/genre';

const prepareGenres = (genres: TGenre[]) =>
  genres.map((genre) => ({
    id: genre.id,
    value: genre.id.toString(),
    label: genre.name,
  }));

export default prepareGenres;
