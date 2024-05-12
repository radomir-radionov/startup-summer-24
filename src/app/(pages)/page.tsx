import { Notice } from '@/components/ui';
import { Movies } from '@/features/MovieEntity';

async function getMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getGenres() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const {
    data: { results },
  } = await getMovies();

  const {
    data: { genres },
  } = await getGenres();

  const a = [];

  if (!a.length) return <Notice variant="noSearchedMovies" />;

  return (
    <>
      {/* <Controls genres={[]} /> */}
      <Movies movies={results} genres={genres} />
    </>
  );
}
