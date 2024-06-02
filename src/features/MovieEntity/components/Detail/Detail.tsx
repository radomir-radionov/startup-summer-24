import { Flex, Text } from '@mantine/core';
import classes from './Detail.module.css';

type TProps = {
  name: string;
  value?: string | number;
};

const Detail = ({ name, value }: TProps) => (
  <Flex gap="s" classNames={classes}>
    <Text component="span">{name}</Text>
    {value && <Text component="span">{value}</Text>}
  </Flex>
);

export default Detail;
