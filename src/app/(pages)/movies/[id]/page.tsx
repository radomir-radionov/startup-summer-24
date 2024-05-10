async function getMovieById(id: string) {
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
  const data = await getMovieById(id);
  console.log(1111, data);

  return <div>1</div>;
}
