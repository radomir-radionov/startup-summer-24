'use client';

import { Card as MantineCard, Stack, Flex, Title } from '@mantine/core';
import { Image } from '@components/ui';
import { TMovie, TMovieDetailed } from '@/types/movie';
import { StarIcon } from '@/assets/icons';
import { Details, Detail, Rating } from '../..';
import { prepareDetails } from '../../helpers';
import classes from './CardExtended.module.css';

type TProps = {
  movie: TMovie | TMovieDetailed;
};

const CardExtended = ({ movie }: TProps) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
  } = movie;
  const movieDetailed = movie as TMovieDetailed;

  const imageSrc = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${poster_path}`;
  const movieYear = new Date(release_date).getFullYear();
  const preparedDetails = prepareDetails(
    movieDetailed.runtime,
    release_date,
    movieDetailed.budget,
    movieDetailed.revenue,
    movieDetailed.genres
  );

  return (
    <MantineCard className={classes.card}>
      <Flex gap={16}>
        <Image src={imageSrc} alt="Poster" outerStyles={classes.image} />
        <Flex className={classes.content}>
          <Stack gap={8}>
            <Title className={classes.title}>{original_title}</Title>
            <Detail name={`${movieYear}`} />
            <Rating
              rating={vote_average}
              voteCount={vote_count}
              color={'var(--mantine-color-yellow-0)'}
            />
          </Stack>
          <Details data={preparedDetails} />
        </Flex>
      </Flex>
      <StarIcon />
    </MantineCard>
  );
};

export default CardExtended;
