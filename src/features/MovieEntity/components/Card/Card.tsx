'use client';

import {
  Card as MantineCard,
  Stack,
  Flex,
  Title,
  UnstyledButton,
  Text,
} from '@mantine/core';
import { MouseEvent, MouseEventHandler } from 'react';
import classes from './Card.module.css';
import { Image } from '@components/ui';
import { TMovie } from '@/types/movie';
import { TGenre } from '@/types/genre';
import { StarIcon } from '@/assets/icons';
import { Detail, Rating } from '../..';
import { prepareGenres } from '../../helpers';
import { useRouter } from 'next/navigation';
import { useModal } from '@/providers/ModalProvider/ModalProvider';
import { MODAL_TYPES } from '@/components/modals/ModalManager';

type TProps = {
  movie: TMovie;
  genres: TGenre[];
};

const Card = ({ movie, genres }: TProps) => {
  const router = useRouter();
  const { modal, openModal } = useModal();

  const movieClone = movie;

  const {
    id,
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    genre_ids,
  } = movie;

  const imageSrc = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${poster_path}`;
  const movieYear = new Date(release_date).getFullYear();
  const preparedGenres = prepareGenres(genres, genre_ids);

  const handleCardClick = () => router.push(`/movies/${id}`);

  const handleRatingClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    openModal(MODAL_TYPES.RATING_MOVIE_MODAL, { movie: movieClone });
  };

  return (
    <MantineCard className={classes.card} w={482} onClick={handleCardClick}>
      <Flex className={classes.contentBox} gap={16}>
        <Image src={imageSrc} alt="Poster" outerStyles={classes.image} />
        <Flex className={classes.content}>
          <Stack gap={8}>
            <Title className={classes.title}>
              {original_title || 'Not indicated'}
            </Title>
            <Detail name={`${movieYear || 'Not indicated'}`} />
            <Rating
              rating={vote_average}
              voteCount={vote_count}
              color={'var(--mantine-color-yellow-0)'}
            />
          </Stack>
          <Detail name="Genres" value={preparedGenres} />
        </Flex>
      </Flex>
      <UnstyledButton onClick={handleRatingClick}>
        {movie.rating ? (
          <Text className={classes.rating}>
            <StarIcon color="var(--mantine-color-purple-4)" />
            {movie.rating}
          </Text>
        ) : (
          <StarIcon />
        )}
      </UnstyledButton>
    </MantineCard>
  );
};

export default Card;
