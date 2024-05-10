import { TGenre } from '@/types/genre';

const getCurrentGenres = (ids: number[], allGenres: TGenre[]): TGenre[] =>
  ids.map((id) => allGenres.find((genre) => genre.id === id)!);

export default getCurrentGenres;
