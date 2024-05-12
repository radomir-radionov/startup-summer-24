import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './Button.module.css';
import Link from 'next/link';

type TProps = {
  href: string;
  children: ReactNode;
};

const Button = ({ children }: TProps) => {
  return <MantineButton className={classes.button}>{children}</MantineButton>;
};

export default Button;
