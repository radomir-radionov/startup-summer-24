import { StarIcon } from '@/assets/icons';
import Image from '../../../ui/Image/Image';
import classes from './Rating.module.css';
import { Box, Text } from '@mantine/core';
import Detail from '@/components/Сard/components/Detail/Detail';
import formatVoteCount from '../../helpers/formatVoteCount';

type TProps = {
  rating: number;
  voteCount: number;
  color?: string;
};

const Rating = ({ rating, voteCount, color }: TProps) => {
  return (
    <Box className={classes.container}>
      <Box className={classes.valueBox}>
        <StarIcon color={color} />
        <Text className={classes.rating}>{rating.toFixed(1)}</Text>
      </Box>
      <Detail name={`(${formatVoteCount(voteCount)})`} />
    </Box>
  );
};

export default Rating;
