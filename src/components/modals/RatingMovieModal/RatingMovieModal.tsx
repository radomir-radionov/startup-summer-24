'use client';

import { Button } from '@/components/ui';
import { Group, Rating, UnstyledButton, Text, Stack } from '@mantine/core';
import classes from './RatingMovieModal.module.css';
import Icons from '@/assets/icons';
import { useState } from 'react';
import { useRatedMovies } from '@/providers/RatedMoviesProvider/RatedMoviesProvider';

type TProps = {
  payload: any;
  onClose: () => void;
};

const RatingMovieModal = ({
  payload: {
    props: { movie },
  },
  onClose,
}: TProps) => {
  const [rating, setRating] = useState(movie.rating ?? 0);
  const { addRatedMovie, updateRatedMovie, deleteRatedMovie } =
    useRatedMovies();

  const handleSaveClick = () => {
    movie.rating
      ? updateRatedMovie(movie.id, rating)
      : addRatedMovie({ ...movie, rating });

    onClose();
  };

  const handleRemoveRatingClick = () => {
    deleteRatedMovie(movie.id);

    onClose();
  };

  return (
    <form className={classes.form}>
      <Group className={classes.header}>
        <Text className={classes.title}>Your rating</Text>
        <UnstyledButton display="flex" onClick={onClose}>
          <Icons.closeIcon />
        </UnstyledButton>
      </Group>
      <Stack gap="md" p="md">
        <Text className={classes.title} fw="700">
          {movie.original_title}
        </Text>
        <Rating
          value={rating}
          onChange={setRating}
          count={10}
          size="lg"
          color="yellow.0"
          className={classes.rating}
        />
        <Group gap="md">
          <Button onClick={handleSaveClick}>Save</Button>
          <Button variant="subtle" onClick={handleRemoveRatingClick}>
            Remove rating
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default RatingMovieModal;
