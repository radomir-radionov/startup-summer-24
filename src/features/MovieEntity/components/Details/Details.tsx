import { Flex, Group } from '@mantine/core';
import Detail from '../Detail/Detail';
import classes from './Details.module.css';

type TDetail = {
  id: number;
  name: string;
  value: string | number;
};

type TProps = {
  data: TDetail[];
};

const Details = ({ data }: TProps) => {
  return (
    <Flex direction="column" gap="12">
      {data.map(({ id, name, value }) => (
        <Group key={id} gap="12" className={classes.detailWrapper}>
          <Detail name={name} value={value} />
        </Group>
      ))}
    </Flex>
  );
};

export default Details;
