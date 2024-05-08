import { urlsTmdb } from '@/constants';

export async function GET() {
  const res = await fetch(urlsTmdb.movies, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
