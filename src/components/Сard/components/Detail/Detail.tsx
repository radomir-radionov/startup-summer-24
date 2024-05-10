import { Text } from '@mantine/core';
import classes from './Detail.module.css';

type TProps = {
  name: string;
  value?: string;
};

const Detail = ({ name, value }: TProps) => {
  return (
    <Text className={classes.detail}>
      {name}
      {value && <span>{value}</span>}
    </Text>
  );
};

export default Detail;
