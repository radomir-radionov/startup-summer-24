import { Controls, Movies } from '@/components';

async function getMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const { data } = await getMovies();
  return (
    <main>
      <Controls genres={[]} />
      <Movies movies={data} />
    </main>
  );
}
