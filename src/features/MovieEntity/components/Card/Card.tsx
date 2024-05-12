'use client';

import { Card as MantineCard, Stack, Flex, Title } from '@mantine/core';
import classes from './Card.module.css';
import { Image } from '@components/ui';
import { TMovie } from '@/types/movie';
import { TGenre } from '@/types/genre';
import { StarIcon } from '@/assets/icons';
import { Detail, Rating } from '../..';
import { prepareGenres } from '../../helpers';
import Link from 'next/link';

type TProps = {
  movie: TMovie;
  genres: TGenre[];
};

const Card = ({
  movie: {
    id,
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    genre_ids,
  },
  genres,
}: TProps) => {
  const imageSrc = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${poster_path}`;
  const movieYear = new Date(release_date).getFullYear();
  const preparedGenres = prepareGenres(genres, genre_ids);

  return (
    <Link href={`/movies/${id}`} className={classes.link}>
      <MantineCard className={classes.card} w={482}>
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
            <Detail name="Genres" value={preparedGenres} />
          </Flex>
        </Flex>
        <StarIcon />
      </MantineCard>
    </Link>
  );
};

export default Card;
