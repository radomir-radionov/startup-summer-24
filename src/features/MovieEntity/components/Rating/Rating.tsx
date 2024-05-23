import { StarIcon } from '@/assets/icons';
import classes from './Rating.module.css';
import { Box, Text } from '@mantine/core';
import formatVoteCount from '../../helpers/prepareVoteCount';
import { Detail } from '../..';

type TProps = {
  rating: number | string;
  voteCount: number;
  color?: string;
};

const Rating = ({ rating, voteCount, color }: TProps) => {
  return (
    <Box className={classes.container}>
      <Box className={classes.valueBox}>
        <StarIcon color={color} />
        <Text className={classes.rating}>{rating}</Text>
      </Box>
      <Detail name={`(${formatVoteCount(voteCount)})`} />
    </Box>
  );
};

export default Rating;
