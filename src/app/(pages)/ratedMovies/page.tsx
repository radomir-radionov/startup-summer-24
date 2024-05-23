import { RatedMoviesPage } from '@/features/MovieEntity';

async function getGenres() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Page() {
  const {
    data: { genres },
  } = await getGenres();

  return <RatedMoviesPage genres={[genres]} />;
}

export default Page;
