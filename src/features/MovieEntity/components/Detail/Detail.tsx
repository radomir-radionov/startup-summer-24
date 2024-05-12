import { Text } from '@mantine/core';
import classes from './Detail.module.css';

type TProps = {
  name: string;
  value?: string | number;
};

const Detail = ({ name, value }: TProps) => (
  <Text className={classes.detail}>
    <Text component="span">{name}</Text>
    {value && <Text component="span">{value}</Text>}
  </Text>
);

export default Detail;
