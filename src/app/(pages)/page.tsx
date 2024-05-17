import { Filters, Pagination, Sorters } from '@/components';
import { Notice } from '@/components/ui';
import { Movies } from '@/features/MovieEntity';
import { Flex, Stack, Title } from '@mantine/core';

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

export default async function Page({ searchParams }: any) {
  const {
    data: { results, total_pages },
  } = await getMovies(searchParams);

  const {
    data: { genres },
  } = await getGenres();

  if (!results?.length) return <Notice variant="noSearchedMovies" />;

  return (
    <Flex direction="column" gap={40} maw={980}>
      <Title>Movies</Title>
      <Stack gap={24}>
        <Filters genres={genres} />
        <Sorters />
        <Movies movies={results} genres={genres} />
        <Pagination totalPages={total_pages} contentPosition="flex-end" />
      </Stack>
    </Flex>
  );
}
