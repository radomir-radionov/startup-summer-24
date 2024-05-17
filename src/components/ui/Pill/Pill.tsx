import { Pill as PillMantine } from '@mantine/core';
import classes from './Pill.module.css';
import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const Pill = ({ children }: TProps) => {
  return <PillMantine className={classes.pill}>{children}</PillMantine>;
};

export default Pill;
