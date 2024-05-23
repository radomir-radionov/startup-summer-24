'use client';

import { TMovieDetailed } from '@/types/movie';
import { Container } from '@mantine/core';
import { AdditionalInfo, CardExtended } from '../..';
import classes from './MoviePage.module.css';
import { Breadcrumbs } from '@/components';
import { usePathname } from 'next/navigation';

type TProps = {
  movie: TMovieDetailed;
};

const MoviePage = ({ movie }: TProps) => {
  const paths = usePathname();
  console.log('movie', movie);
  const pathNames = paths.split('/').filter((path) => path);
  const { overview, production_companies, videos } = movie;
  const additionalInfo = { overview, production_companies, videos };

  pathNames[1] = movie.original_title;

  const breadcrumbs = [
    { id: 0, title: pathNames[0], href: '/' },
    { id: 1, title: pathNames[1], href: `/movies/${movie.id}` },
  ];

  return (
    <Container className={classes.container}>
      <Breadcrumbs data={breadcrumbs} />
      <CardExtended movie={movie} />
      <AdditionalInfo data={additionalInfo} />
    </Container>
  );
};

export default MoviePage;
