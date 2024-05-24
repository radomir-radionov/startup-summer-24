import { StarIcon } from '@/assets/icons';
import classes from './Rating.module.css';
import { Box, Flex, Text } from '@mantine/core';
import formatVoteCount from '../../helpers/prepareVoteCount';
import { Detail } from '../..';

type TProps = {
  rating: number | string;
  voteCount: number;
  color?: string;
};

const Rating = ({ rating, voteCount, color }: TProps) => {
  return (
    <Flex align="center" gap="s">
      <Flex align="center" gap="4">
        <StarIcon color={color} />
        <Text className={classes.rating}>{rating}</Text>
      </Flex>
      <Detail name={`(${formatVoteCount(voteCount)})`} />
    </Flex>
  );
};

export default Rating;
