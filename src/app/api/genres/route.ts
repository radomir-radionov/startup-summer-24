import { urlsTmdb } from '@/constants';

export async function GET() {
  try {
    const res = await fetch(urlsTmdb.genres, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
    });
  }
}
