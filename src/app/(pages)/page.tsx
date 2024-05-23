import { Suspense } from '@/components/ui';
import { MoviesPage } from '@/features/MovieEntity';

async function getMovies(searchParams: any) {
  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);

  Object.keys(searchParams).forEach((key) => {
    url.searchParams.append(key, searchParams[key]);
  });

  const res = await fetch(url, {
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

const Page = async ({ searchParams }: any) => {
  return (
    <Suspense keyProp={JSON.stringify(searchParams)}>
      <Suspended searchParams={searchParams} />
    </Suspense>
  );
};

async function Suspended({ searchParams }: any) {
  const {
    data: { results, total_results },
  } = await getMovies(searchParams);

  const {
    data: { genres },
  } = await getGenres();

  return (
    <MoviesPage movies={results} genres={genres} totalItems={total_results} />
  );
}

export default Page;
