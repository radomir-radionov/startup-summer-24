import { urlsTmdb } from '@/constants';

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
): Promise<Response> {
  const res = await fetch(
    `${urlsTmdb.movie}/${id}?language=en-US&append_to_response=videos,images`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await res.json();

  return Response.json(data);
}
