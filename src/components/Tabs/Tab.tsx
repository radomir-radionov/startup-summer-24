import { Tabs } from '@mantine/core';
import classes from './Tab.module.css';

type TProps = {
  value: string;
  text: string;
};

const Tab = ({ value, text }: TProps) => {
  return (
    <Tabs.Tab value={value} className={classes.tab}>
      {text}
    </Tabs.Tab>
  );
};

export default Tab;
