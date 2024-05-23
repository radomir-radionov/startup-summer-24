import { RatedMoviesPage } from '@/features/MovieEntity';

// async function getGenres() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`);
//     if (!res.ok) {
//       throw new Error('Failed to fetch genres');
//     }
//     return res.json();
//   } catch (error) {
//     console.error('Error fetching genres:', error);
//     throw error;
//   }
// }

async function Page() {
  // const {
  //   data: { genres },
  // } = await getGenres();

  return <RatedMoviesPage genres={[]} />;
}

export default Page;
