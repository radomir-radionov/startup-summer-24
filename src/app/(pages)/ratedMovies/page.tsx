import { RatedMoviesPage } from '@/features/MovieEntity';

async function getGenres() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Page() {
  const {
    data: {},
  } = await getGenres();

  return <RatedMoviesPage genres={genres} />;
}

export default Page;
