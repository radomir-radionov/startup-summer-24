import { StarIcon } from '@/assets/icons';
import classes from './Rating.module.css';
import { Box, Text } from '@mantine/core';
import formatVoteCount from '../../helpers/formatVoteCount';
import { Detail } from '../..';

type TProps = {
  rating: number;
  voteCount: number;
  color?: string;
};

const Rating = ({ rating, voteCount, color }: TProps) => (
  <Box className={classes.container}>
    <Box className={classes.valueBox}>
      <StarIcon color={color} />
      <Text className={classes.rating}>{rating.toFixed(1)}</Text>
    </Box>
    <Detail name={`(${formatVoteCount(voteCount)})`} />
  </Box>
);

export default Rating;
