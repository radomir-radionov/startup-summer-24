'use client';

import {
  Card as MantineCard,
  Stack,
  Flex,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './Card.module.css';
import { Image } from '../ui';
import { TMovie } from '@/types/movie';
import { TGenre } from '@/types/genre';
import getCurrentGenres from './helpers/getCurrentGenres';
import { StarIcon } from '@/assets/icons';
import Detail from './components/Detail/Detail';
import Rating from './components/Rating/Rating';
import Link from 'next/link';

type TProps = {
  movie: TMovie;
  genres: TGenre[];
};

const Card = ({
  movie: {
    id,
    original_title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    genre_ids,
  },
  genres,
}: TProps) => {
  const { colors } = useMantineTheme();

  const currentGenres = getCurrentGenres(genre_ids, genres)
    .map(({ name }) => name)
    .join(', ');

  return (
    <Link href={`/movies/${id}`} className={classes.link}>
      <MantineCard className={classes.card}>
        <Flex gap={16}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${poster_path}`}
            alt="Poster"
            width={119}
            height={170}
          />
          <Flex className={classes.content}>
            <Stack gap={8}>
              <Title className={classes.title}>{original_title}</Title>
              <Detail name={`${new Date(release_date).getFullYear()}`} />
              <Rating
                rating={vote_average}
                voteCount={vote_count}
                color={colors.yellow[0]}
              />
            </Stack>
            <Detail name="Genres" value={currentGenres} />
          </Flex>
        </Flex>
        <StarIcon />
      </MantineCard>
    </Link>
  );
};

export default Card;
