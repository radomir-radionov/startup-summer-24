import { Filters, Sorters } from '@/components';
import { MoviesPage } from '@/features/MovieEntity';
import { Flex, Stack, Title } from '@mantine/core';
import { Suspense } from '@/components/ui';

async function getMovies(searchParams: any) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);

    Object.keys(searchParams).forEach((key) => {
      url.searchParams.append(key, searchParams[key]);
    });

    const res = await fetch(url, {
      next: { revalidate: 0 },
    });

    const jsonData = await res.json();

    if (!res.ok) {
      throw new Error(jsonData.error || 'Unknown error occurred');
    }

    return jsonData;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

async function getGenres() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`, {
      next: { revalidate: 0 },
    });

    const jsonData = await res.json();

    if (!res.ok) {
      throw new Error('Failed to fetch genres');
    }

    return jsonData;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

const Page = async ({ searchParams }: any) => {
  const {
    data: { genres },
  } = await getGenres();

  return (
    <Flex direction="column" gap="xlg" maw={{ base: '100%', lg: 980 }}>
      <Title order={2}>Movies</Title>
      <Stack gap="xmd">
        <Filters genres={genres} />
        <Sorters />
        <Suspense keyProp={JSON.stringify(searchParams)}>
          <Suspended searchParams={searchParams} genres={genres} />
        </Suspense>
      </Stack>
    </Flex>
  );
};

async function Suspended({ searchParams, genres }: any) {
  const moviesData = await getMovies(searchParams);

  return (
    <MoviesPage
      genres={genres}
      movies={moviesData.data.results}
      totalItems={moviesData.data.total_results}
    />
  );
}

export default Page;
