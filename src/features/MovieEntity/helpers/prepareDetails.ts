import { formatCurrency, formatDate, formatTime, prepareGenres } from '.';
import { TGenre } from '@/types/genre';

const prepareDetails = (
  runtime: number,
  release_date: string,
  budget: number,
  revenue: number,
  genres: TGenre[]
) => {
  return [
    { id: 0, name: 'Duration', value: formatTime(runtime) },
    { id: 1, name: 'Premiere', value: formatDate(release_date) },
    { id: 2, name: 'Budget', value: formatCurrency(budget) },
    { id: 3, name: 'Gross worldwide', value: formatCurrency(revenue) },
    { id: 4, name: 'Genres', value: prepareGenres(genres) },
  ];
};

export default prepareDetails;
