import { Suspense } from '@/components/ui';
import { MoviePage } from '@/features/MovieEntity';

async function getMovieById(id: string): Promise<any> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.error || 'Failed to fetch data');
    }

    const jsonData = await res.json();

    return jsonData;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
}

type TParams = {
  params: { id: string };
};

const Page = ({ params }: TParams) => {
  return (
    <Suspense keyProp={JSON.stringify(params)}>
      <Suspended params={params} />
    </Suspense>
  );
};

async function Suspended({ params: { id } }: TParams) {
  const movie = await getMovieById(id);

  return <MoviePage movie={movie} />;
}

export default Page;
