import { MoviePage } from '@/features/MovieEntity';

async function getMovieById(id: string): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`,
    {
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
type TParams = {
  params: { id: string };
};

export default async function Page({ params: { id } }: TParams) {
  const movie = await getMovieById(id);

  return <MoviePage movie={movie} />;
}
