import { urlsTmdb } from '@/constants';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const genresParam = searchParams.get('with_genres');
  if (genresParam) {
    const genreIds = genresParam.split(',').map(Number);

    const validGenreIds = [
      28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878,
      10770, 53, 10752, 37,
    ];

    const isValid = genreIds.every((id) => validGenreIds.includes(id));
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

  const url = new URL(`${urlsTmdb.movies}`);
  url.search = '';

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
