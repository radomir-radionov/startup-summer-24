'use client';

import {
  Card as MantineCard,
  Stack,
  Flex,
  Title,
  UnstyledButton,
  Text,
} from '@mantine/core';
import { Image } from '@components/ui';
import { TMovie, TMovieDetailed } from '@/types/movie';
import { StarIcon } from '@/assets/icons';
import { Details, Detail, Rating } from '../..';
import { prepareDetails } from '../../helpers';
import classes from './CardExtended.module.css';
import { MouseEventHandler } from 'react';
import { MODAL_TYPES } from '@/components/modals/ModalManager';
import { useModal } from '@/providers/ModalProvider/ModalProvider';
import { useRatedMovies } from '@/providers/RatedMoviesProvider/RatedMoviesProvider';

type TProps = {
  movie: TMovieDetailed;
};

const CardExtended = ({ movie }: TProps) => {
  const { modal, openModal } = useModal();
  const { getRatedMovie } = useRatedMovies();

  const ratedMovie = getRatedMovie(movie.id);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    rating,
    runtime,
    budget,
    revenue,
    genres,
  } = movie;

  const currentMovieData = ratedMovie ?? movie;
  const currentRating = ratedMovie ? ratedMovie.rating : rating;

  const imageSrc = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${poster_path}`;
  const movieYear = new Date(release_date).getFullYear();
  const preparedDetails = prepareDetails(
    runtime,
    release_date,
    budget,
    revenue,
    genres
  );

  const handleRatingClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    openModal(MODAL_TYPES.RATING_MOVIE_MODAL, { movie: currentMovieData });
  };

  return (
    <MantineCard className={classes.card}>
      <Flex gap={16} className={classes.contentBox}>
        <Image src={imageSrc} alt="Poster" outerStyles={classes.image} />
        <Flex className={classes.content}>
          <Stack gap={8}>
            <Title className={classes.title}>
              {original_title || 'Not indicated'}
            </Title>
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
      <UnstyledButton onClick={handleRatingClick}>
        {currentRating ? (
          <Text className={classes.rating}>
            <StarIcon color="var(--mantine-color-purple-4)" />
            {currentRating}
          </Text>
        ) : (
          <StarIcon />
        )}
      </UnstyledButton>
    </MantineCard>
  );
};

export default CardExtended;
