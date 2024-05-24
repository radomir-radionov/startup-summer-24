import prepareReleaseYears from '@/components/Filters/helpers/prepareReleaseYears';
import { urlsTmdb } from '@/constants';
import { TGenre } from '@/types/genre';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const url = new URL(`${urlsTmdb.movies}`);

  const genresParam = searchParams.get('with_genres');
  const primaryReleaseYearParam = searchParams.get('primary_release_year');

  const resGenres = await fetch(urlsTmdb.genres, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`,
    },
    next: { revalidate: 0 },
  });

  const { genres } = await resGenres.json();
  const validGenresIds = genres.map(({ id }: TGenre) => id);

  if (genresParam) {
    const genreIds = genresParam.split(',').map(Number);

    const isValid = genreIds.every((id) => validGenresIds.includes(id));
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: 'Invalid genre ID provided' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }

  if (primaryReleaseYearParam) {
    const validReleaseYears = prepareReleaseYears();

    const isValid = validReleaseYears.includes(primaryReleaseYearParam);

    if (!isValid) {
      return new Response(JSON.stringify({ error: 'The year is not valid.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  searchParams.forEach((value, key) => url.searchParams.append(key, value));

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`,
    },
    next: { revalidate: 0 },
  });

  const data = await res.json();

  return new Response(JSON.stringify({ data }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
