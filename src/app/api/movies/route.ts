import { urlsTmdb } from '@/constants';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

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
