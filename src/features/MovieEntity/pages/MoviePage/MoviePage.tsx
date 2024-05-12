import { TMovieDetailed } from '@/types/movie';
import { Container } from '@mantine/core';
import { AdditionalInfo, CardExtended } from '../..';
import classes from './MoviePage.module.css';

type TProps = {
  movie: TMovieDetailed;
};

const MoviePage = ({ movie }: TProps) => {
  const { overview, production_companies, videos } = movie;
  const additionalInfo = { overview, production_companies, videos };

  return (
    <Container className={classes.container}>
      <CardExtended movie={movie} />
      <AdditionalInfo data={additionalInfo} />
    </Container>
  );
};

export default MoviePage;
