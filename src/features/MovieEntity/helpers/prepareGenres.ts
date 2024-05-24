import { TGenre } from '@/types/genre';

const prepareGenres = (genres: TGenre[]): string => {
  if (!genres?.length) return 'Not indicated';

  return genres.map(({ name }) => name).join(', ');
};

export default prepareGenres;
