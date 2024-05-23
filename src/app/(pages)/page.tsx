import { Suspense } from '@/components/ui';
import { MoviesPage } from '@/features/MovieEntity';

async function getMovies(searchParams: any) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);

    Object.keys(searchParams).forEach((key) => {
      url.searchParams.append(key, searchParams[key]);
    });

    const res = await fetch(url, {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.error || 'Unknown error occurred');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

async function getGenres() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`);

    if (!res.ok) {
      throw new Error('Failed to fetch genres');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

const Page = ({ searchParams }: any) => {
  return (
    <Suspense keyProp={JSON.stringify(searchParams)}>
      <Suspended searchParams={searchParams} />
    </Suspense>
  );
};

async function Suspended({ searchParams }: any) {
  const moviesData = await getMovies(searchParams);
  const genresData = await getGenres();

  return (
    <MoviesPage
      movies={moviesData.data.results}
      genres={genresData.data.genres}
      totalItems={moviesData.data.total_results}
    />
  );
}

export default Page;
