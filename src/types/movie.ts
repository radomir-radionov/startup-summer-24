import { TGenre } from './genre';

export type TMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating?: number;
};

export type TMovieDetailed = {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  budget: number;
  revenue: number;
  genres: TGenre[];
  overview: string;
  production_companies: TProductionCompanies[];
  videos: any;
  rating?: number;
};

export type TProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
