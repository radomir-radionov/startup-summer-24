import { RatedMoviesPage } from '@/features/MovieEntity';

async function getGenres() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`, {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch genres');
    }

    const jsonData = await res.json();

    return jsonData;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

async function Page() {
  const genresData = await getGenres();

  return <RatedMoviesPage genres={genresData.data.genres} />;
}

export default Page;
