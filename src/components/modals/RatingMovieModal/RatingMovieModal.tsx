'use client';

import { Button } from '@/components/ui';
import { Group, Rating, UnstyledButton, Text, Stack } from '@mantine/core';
import classes from './RatingMovieModal.module.css';
import Icons from '@/assets/icons';
import { useState } from 'react';
import { ratedMoviesService } from '@/services';

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

  const handleSaveClick = () => {
    movie.rating
      ? ratedMoviesService.updateRatedMovie(movie.id, rating)
      : ratedMoviesService.addRatedMovie(movie, rating);

    onClose();
    window.location.reload();
  };

  const handleRemoveRatingClick = () => {
    ratedMoviesService.deleteRatedMovie(movie.id);

    onClose();
    window.location.reload();
  };

  return (
    <form className={classes.form}>
      <Group className={classes.header}>
        <Text className={classes.title}>Your rating</Text>
        <UnstyledButton display="flex" onClick={onClose}>
          <Icons.closeIcon />
        </UnstyledButton>
      </Group>
      <Stack gap={16} p={16}>
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
        <Group gap={16}>
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
